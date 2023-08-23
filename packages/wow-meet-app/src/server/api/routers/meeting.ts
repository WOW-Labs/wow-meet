import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const meetingRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),

        schedule: z
          .object({
            type: z.string(),
            dateRange: z.array(z.date()).optional(),
            dayList: z.array(z.string()).optional(),
            timeRange: z.array(z.date()).optional(),

            isPriorityOption: z.boolean(),
          })
          .optional(),

        votes: z
          .array(
            z.object({
              title: z.string(),
              type: z.string(),
              options: z.array(z.string()),
            })
          )
          .optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const meetingResult = await ctx.prisma.meeting.create({
          data: {
            title: input.title,
            description: input.description,
            isSchedule: input.schedule ? true : false,
            isVote: input.votes ? true : false,
          },
        });

        if (input?.schedule) {
          await ctx.prisma.schedule.create({
            data: {
              meetingId: meetingResult.id,
              type: input.schedule.type,
              dateRange: input.schedule.dateRange || [],
              dayList: input.schedule.dayList || [],
              timeRange: input.schedule.timeRange,
              isPriorityOption: input.schedule.isPriorityOption,
            },
          });
        }

        if (input?.votes) {
          for (const vote of input.votes) {
            await ctx.prisma.vote.create({
              data: {
                meetingId: meetingResult.id,
                type: vote.type,
                options: vote.options,
                title: vote.title,
              },
            });
          }
        }

        return {
          success: true,
        };
      } catch (err) {
        console.log(err);
        return {
          success: false,
        };
      }
    }),
  read: publicProcedure
    .input(z.object({ meetingId: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        let schedule;
        let votes;
        let participants;
        const meeting = await ctx.prisma.meeting.findUnique({
          where: { id: input.meetingId },
        });

        if (meeting?.id && meeting.isSchedule) {
          schedule = await ctx.prisma.schedule.findUnique({
            where: { meetingId: meeting.id },
          });
        }

        if (meeting?.id && meeting.isVote) {
          votes = await ctx.prisma.vote.findMany({
            where: { meetingId: meeting.id },
          });
        }

        if (meeting?.id) {
          participants = await ctx.prisma.participants.findMany({
            where: { meetingId: meeting.id },
          });
        }

        return {
          data: {
            ...meeting,
            schedule: schedule,
            votes: votes,
            participants: participants,
          },
        };
      } catch (err) {}
    }),
  addVoteItem: publicProcedure
    .input(
      z.object({
        meetingId: z.string(),
        toBeAddedlist: z.array(z.string()),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.vote.update({
          where: { meetingId: input.meetingId },
          data: {
            options: {
              push: input.toBeAddedlist,
            },
          },
        });

        return {
          success: true,
        };
      } catch (err) {
        console.log(err);
        return {
          success: false,
        };
      }
    }),
});
