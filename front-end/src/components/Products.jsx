import React from 'react'
import people from '../assets/people.png'

export const Products = () => {
return(
    <>
    <div className="mt-[100px] flex flex-col items-center justify-center">
        <div className="h-screen w-screen ml-[520px]">
         <div className=" flex h-[450px] w-[900px] p-[40px] text-[50px] font-[800] justify-center"> 10 secrets for managing a remote team</div>
         <div className="flex flex-row">
            <div></div>
            <div></div>
         </div>
         <img src={people} alt="img"  className="h-[450px] w-[900px] flex justify-center"></img>
         <p className=" flex justify-center items-center h-[900px]  w-[700px] p-[70px] leading-[30px]">If you’re thinking of starting a blog of your own, but just don’t have a clue on what to blog about, then fear not!

         In this article, I have included a whole load of blog examples from a wide variety of different niches, all run on different blogging platforms like WordPress, Joomla! and Drupal.

         Since the beginning of the internet, millions and millions and millions of blogs have been created. Many have died due to lost interest or their owners giving up on the idea, while others have thrived and continue to grow, making money and earning their owners a steady income. It’s a constant evolution of content that keeps people coming back for more, especially if these blogs contact highly resourceful material that people find useful and interesting.

         Each example listed in this blog post are all different in some way and all bring something unique to their readers & subscribers. I want to show you what is possible and how you can take inspiration from them and create an awesome blog of your own.

         Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.
         Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and 

         Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.
         Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.</p>
    </div>
    </div>

    </>
)
}
