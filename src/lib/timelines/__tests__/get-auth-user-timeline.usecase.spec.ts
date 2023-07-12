import { describe, it, expect } from "vitest";
import {store} from "@/lib/store.ts";
import {getAuthUserTimeline} from "@/lib/timelines/usecases/get-auth-user-timeline.usecase.ts";

describe("Feature: Retrieving authenticated user's timeline", () => {
   it("Example: Alice is authenticated and can see her timeline", async () => {       
       givenAuthenticatedUserIs("Alice")
       givenExistingTimeline({
           user: "Alice",
           messages:[
               { text: "Hello it's Bob", author: "Bob", publishedAt: new Date("2023-05-16T12:06:00.000Z") },
               { text: "Hello it's Alice", author: "Alice", publishedAt: new Date("2023-05-16T12:05:00.000Z") },
           ]
       })
       
       await whenRetrievingAuthenticatedUserTimeline()
       
       thenTheReceivedTimelineShouldBe({
           user: "Alice",
            messages:[
                { 
                    text: "Hello it's Bob", 
                    author: "Bob", 
                    publishedAt: "2023-05-16T12:06:00.000Z"
                },
                { 
                    text: "Hello it's Alice", 
                    author: "Alice", 
                    publishedAt: "2023-05-16T12:05:00.000Z"
                },
            ]
        })
   });
});

function givenAuthenticatedUserIs(user: string) {

}

function givenExistingTimeline(timeline: {
    messages: ({ publishedAt: Date; author: string; text: string } | {
        publishedAt: Date;
        author: string;
        text: string
    })[];
    user: string
}) {

}

async function whenRetrievingAuthenticatedUserTimeline() {
    await store.dispatch(getAuthUserTimeline());
}

function thenTheReceivedTimelineShouldBe(expectedTimeline: {
    user: string,
    messages: ({
        publishedAt: string;
        author: string;
        text: string
    })[]
}) {
    const authUserTimeline = store.getState();
    expect(authUserTimeline).toEqual(expectedTimeline);
}