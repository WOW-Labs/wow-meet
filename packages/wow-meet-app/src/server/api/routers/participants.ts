import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const paticipantsRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        meetingId: z.string(),
        name: z.string(),
        password: z.string().optional(),

        isPriority: z.boolean(),

        schelduleList: z
          .array(z.object({ weight: z.number(), date: z.date() }))
          .optional(),
        voteList: z
          .array(z.object({ voteId: z.string(), option: z.string() }))
          .optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const result = await ctx.prisma.participants.create({
          data: {
            isPriority: input.isPriority,
            meetingId: input.meetingId,
            name: input.name,
            password: input?.password || "",
            schelduleList: JSON.stringify(input?.schelduleList || []),
            voteList: JSON.stringify(input?.voteList || []),
          },
        });
        return { success: true, id: result.id };
      } catch (err) {
        return { success: false };
      }
    }),
  updateMeetingParticipationSchedule: publicProcedure
    .input(
      z.object({
        meetingId: z.string(),
        user: z.object({ name: z.string(), password: z.string().optional() }),
        schelduleList: z
          .array(z.object({ weight: z.number(), date: z.date() }))
          .optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const userInfoId = await ctx.prisma.participants.findFirst({
          where: {
            name: input.user.name,
            password: input.user.password || "",
            meetingId: input.meetingId,
          },
          select: { id: true },
        });

        if (!userInfoId) {
          // 유저 정보가 일치하지 않음
          throw new Error("유효한 사용자 정보가 없습니다.");
        }

        await ctx.prisma.participants.update({
          where: { id: userInfoId.id },
          data: { schelduleList: JSON.stringify(input?.schelduleList || []) },
        });

        return { success: true };
      } catch (err) {
        console.log(err);
        return { success: false };
      }
    }),
});
