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
});
