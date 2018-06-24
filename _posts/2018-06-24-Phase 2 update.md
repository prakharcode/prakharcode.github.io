---
title: "Phase-2 Update - GSoC'18"
layout: post
date: 2018-06-24 14:20
image: /assets/images/juliaastro.png
headerImage: true
tag:
- GSoC
- life
category: blog
author: Prakhar Srivastava
description: This post describes the time spent Phase 2 period.
---
# Passed the first evaluation!
It was the morning of 15th June, I got up and as a habit checked my emails. There it was a mail stating, "You've passed the first evaluation!". Oh, it felt so good that I slept back again, haha! Anyway, I did my first phase work near to the deadline and it was a bit due to my exams that's why I was relieved after seeing an evaluation stating "Passed".

# Onset of Phase-2
I am glad to inform that the proposed work of my second phase is already complete and is currently under review by my mentor. All the necessary functions are in the [AstroTime.jl](https://github.com/JuliaAstro/AstroTime.jl) are ported and soon the package will be completely independent and free of any ported code from C's liberfa. That's something fruitful, isn't it? So, let me update more on my work; I ported the following functions during this period.

- [eraD2dtf](https://github.com/JuliaAstro/AstroTime.jl/pull/41)
- [eraDtf2d](https://github.com/JuliaAstro/AstroTime.jl/pull/36)
- [eraDtdb](https://github.com/JuliaAstro/AstroTime.jl/pull/14)
- [eraTaiutc](https://github.com/JuliaAstro/AstroTime.jl/pull/39)
- [eraTtut1](https://github.com/JuliaAstro/AstroTime.jl/pull/21)
- [eraUt1tt](https://github.com/JuliaAstro/AstroTime.jl/pull/22)
- [eraUt1utc](https://github.com/JuliaAstro/AstroTime.jl/pull/40)
- [eraUtcut1](https://github.com/JuliaAstro/AstroTime.jl/pull/38)

This mark completion of all the function that was initially mentioned in the [issue #1](https://github.com/JuliaAstro/AstroTime.jl/issues/1) at the time of GSoC proposal. It gives me immense pleasure to mention that I'll be the one to make AstroTime.jl completely independent and thus making the package purely written in Julia.


# What now?

Since I'm done with the phase 2 work of my proposal this early, I'll be starting with phase 3 work soon. But first and foremost important thing is to refactor all the code and optimize it, remove the dependencies from `conversion.jl` and then move on to phase 3 work.


# Perks

On 20th June while traveling in the metro, I received a message stating, XXX money is transferred to your account. The message just caused a smile on my frowned and tired face. It was the money that I earned through the hard work that I had put in during all this time. It sure feels good!


## As always, GSoC is AWESOME!
