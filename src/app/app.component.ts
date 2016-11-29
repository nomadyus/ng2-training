import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      id: 0,
      title: "Huawei Boss Crashes; News Stories Disappear",
      body: "Kevin Weng, a senior officer at Chinese telecoms giant Huawei, took out three tuk-tuks and a motorbike in an early morning crash last week in Phnom Penh, according to police, and photographs posted online show the front-right side of his BMW i8 sports car smashed and tuk-tuks destroyed. Predictably, the story was all over the Khmer-language news, with reports quoting mostly anonymous officials describing a crash and subsequent effort by the driver to flee the scene. But in the ensuing days, it disappeared from many of the sites. Editors of the sites that took down the story either denied removing it, blamed the disappearance on a technical error or could not be reached. However, the owner of an expatriate online forum said he declined an offer of $100 to take down a thread about the crash.",
      likeCount: 0
    },
    {
      id: 1,
      title: "Beating the Compiler",
      body: "An oft-repeated fact on programming forums these days is that a decent optimizing compiler will always beat a puny human's attempt at hand-written assembler. There are rare cases, like MPEG decoders, where making good use of the SIMD instructions can allow assembly to massively beat the compiler. But generally you'll hear that the compiler will always do better. The reason given for this is usually that a modern CPU has so many pipelines and instruction hazards to deal with, and a naive assembly routine won't do as good a job dealing with them. But is it true? Let's not just take some guys word on the Internet as gospel, let's do a little experiment and find out. We'll just take a simple piece of code to look at here. I'm not going to pick an example that would benefit heavily from exotic intrinsics. Instead I'll just use an old standard, quicksort. Here's the naive C++ quicksort we'll be testing against:",
      likeCount: 0
    },
    {
      id: 2,
      title: "How did a boring Nintendo game from 1987 become the most coveted cartridge ever? It's a bit of a mystery.",
      body: "None of this would've happened had Jennifer Thompson not gone thriftin'. This was in April 2013, and she was browsing clothes and $1 DVDs at the Steele Creek Goodwill in Mecklenburg County, North Carolina, when she noticed it behind the glass counter. The video game title sparked a memory, a Yahoo article about the rarest games in the world. Jennifer carefully drove her '99 Honda Accord across the street to McDonald's, just to use the restaurant's Wi-Fi to make sure she hadn't been wrong. She then crossed the street again and purchased the game for $8 from the $30 she had in her bank account, praying the clerk wouldn't recognize what it was and stop her. When she took it for validation to a used video game store in Charlotte, the young man behind the counter rustled open the plastic bag and beheld the game -- pristine in its cardboard box covered by much of the original cellophane -- coughing the words \"Oh my god.\" He offered her all the money in the register for it. She turned him down.",
      likeCount: 0
    }
  ]
  
  updateLikeCount(id, likeCount) {
    const index = this.posts.findIndex(post => id === post.id);
    this.posts[index].likeCount = likeCount;
  }
}
