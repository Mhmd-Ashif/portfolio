/* eslint-disable react/no-unescaped-entities */
import walletGen1 from "public/images/wallet gen/img1.png";
import walletGen2 from "public/images/wallet gen/img2.png";
import walletGen3 from "public/images/wallet gen/img3.png";

import ss1 from "public/images/song sync/img1.png";
import ss21 from "public/images/song sync/img2.1.png";
import ss22 from "public/images/song sync/img2.2.png";
import ss31 from "public/images/song sync/img3.1.png";
import ss4 from "public/images/song sync/img4.png";

import py1 from "public/images/payit/img1.png";
import py2 from "public/images/payit/img2.png";
import py3 from "public/images/payit/img3.png";
import py4 from "public/images/payit/img4.png";
import py5 from "public/images/payit/img5.png";

import m1 from "public/images/medium/img1.png";
import m2 from "public/images/medium/img2.png";
import m3 from "public/images/medium/img3.png";
import m4 from "public/images/medium/img4.png";
import m5 from "public/images/medium/img5.png";

export const products = [
  {
    href: "https://wallet-ash.vercel.app/",
    title: "Wallet Gen",
    description:
      "HD Wallet Generator for creating Private and Public Keys for Solana and Ethereum",
    thumbnail: walletGen1,
    images: [walletGen1, walletGen2, walletGen3],
    stack: ["Typescript", "React", "Tailwind CSS", "Shadcn"],
    slug: "walletgen",
    content: (
      <div>
        <p>
          Wallet Gen is a secure HD wallet key generator that allows users to
          generate and manage public/private key pairs for both Solana and
          Ethereum. Users can either generate a new set of mnemonic key phrases
          or enter an existing one to recover their wallet details. This tool
          simplifies the process of exploring and interacting with blockchain
          wallets without compromising security.
        </p>
        <p>
          The UI is sleek, responsive, and dark-themed — built with Tailwind CSS
          and Shadcn components. Wallet balances are fetched in real-time using
          RPC calls to the Solana and Ethereum networks. Users can easily copy
          keys to their clipboard, making the tool practical and efficient for
          both desktop and mobile users. Perfect for developers, hobbyists, or
          anyone looking to explore blockchain addresses safely and instantly.
        </p>
      </div>
    ),
  },
  {
    href: "https://song-sync-eta.vercel.app/",
    title: "Song Sync",
    description:
      "Sync, Stream, and Share Music with Friends by copy-pasting YouTube video links",
    thumbnail: ss1,
    images: [ss1, ss21, ss22, ss31, ss4],
    stack: ["React", "Node js", "Redis", "WebSocket", "Firebase OAuth"],
    slug: "songsync",
    content: (
      <div>
        <p>
          Song Sync is a real-time, collaborative music streaming platform that
          lets users listen to YouTube videos together — perfectly in sync. Just
          paste a YouTube video link and instantly stream it with friends, no
          matter where they are. It's like a virtual room where everyone hits
          "play" at the same time without needing to coordinate manually.
        </p>
        <p>
          Built using WebSockets for real-time audio synchronization, Redis for
          managing session states, and Firebase OAuth for seamless sign-in, the
          app delivers a smooth and immersive social listening experience.
          Whether it’s a group jam session or discovering new tracks together,
          Song Sync makes shared music moments effortless and fun.
        </p>
      </div>
    ),
  },
  {
    href: "https://payit-wallet.vercel.app/",
    title: "Payit",
    description: "Payment Done Easier with Payit — a Paytm-inspired Wallet App",
    thumbnail: py1,
    images: [py1, py2, py3, py4, py5],
    stack: ["Nextjs", "Tailwindcss", "Postgres SQL", "Prisma", "Email Auth"],
    slug: "payit",
    content: (
      <div>
        <p>
          PayIt is a secure and intuitive digital wallet application modeled
          after Paytm, designed to simplify the way users manage and transfer
          money. It supports user authentication via email and allows real-time
          transaction tracking, giving a seamless banking-like experience
          without the complexity.
        </p>
        <p>
          Built with Next.js and styled using Tailwind CSS, the app leverages
          PostgreSQL and Prisma ORM for efficient backend operations. Every
          transaction is logged in real-time, and a clean dashboard helps users
          monitor their activity. Whether sending money or viewing recent
          transactions, PayIt delivers a responsive, fast, and user-friendly
          payment flow.
        </p>
      </div>
    ),
  },
  {
    href: "https://medium-mauve.vercel.app/",
    title: "Medium Clone",
    description: "A Blogging Website similar to Medium",
    thumbnail: m3,
    images: [m1, m2, m3, m4, m5],
    stack: ["React", "Cloudflare workers", "MongoDB", "Hono"],
    slug: "medium",
    content: (
      <div>
        <p>
          This Medium-inspired blogging platform allows users to write, publish,
          and explore articles with a sleek and distraction-free editor. It
          supports rich-text formatting, making the writing experience smooth
          and engaging for content creators who want to share ideas, stories, or
          technical blogs.
        </p>
        <p>
          The app is powered by Cloudflare Workers and Hono for ultra-fast
          edge-side logic, enabling near-instant page loads and dynamic
          rendering. MongoDB handles secure data storage for posts and user
          profiles, while the React frontend delivers a modern and responsive
          UI. Whether you're reading or writing, the platform feels fast,
          lightweight, and intuitive.
        </p>
      </div>
    ),
  },
];
