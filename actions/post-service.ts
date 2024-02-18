"use server";

import { db } from "@/lib/db";
import { Post } from "@prisma/client";
import { getBlockedUsers } from "./block-service";


export const getAllPosts = async (
  id: string,
) => {
  try {
    if (!id) return null;

    const blockedUsers = await getBlockedUsers(id);

    // Query all the posts of the current user and the users they are following
    // Include their username, profile image, and id
    const posts = await db.user.findUnique({
      where: { id },
      include: {
        posts: true,
        following: {
          where: {
            NOT: {
              followerId: {
                in: blockedUsers?.map((block) => block.blockedId),
              },
            },
          },
          include: {
            follower: {
              select: {
                id: true,
                username: true,
                profileImageUrl: true,
                posts: true,
              },
            },
          },
        },
      },
    });


    return posts;
  } catch (error) {
    console.log("[GET_ALL_POSTS]", error);
    return null;
  }
};

export const getAllSavedPosts = async (userId: string) => {
  try {
    const posts = await db.save.findMany({
      where: {
        userId,
        isSaved: true,
      },
      include: {
        post: {
          include: {
            creator: {
              select: {
                id: true,
                username: true,
                profileImageUrl: true,
              }
            }
          }
        }
      },
    });

    return posts;
  } catch (error) {
    console.log("[GET_ALL_SAVED_POSTS]", error);
    return null;
  }
};

export const getNumberOfLikes = async (postId: string[] | undefined) => {
  try {
    const likes = await db.like.count({
      where: {
        postId: {
          in: postId,
        },
      },
    });

    return likes;
  } catch (error) {
    console.log("[GET_NUMBER_OF_LIKES]", error);
    return null;
  }
};
