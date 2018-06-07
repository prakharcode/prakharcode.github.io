---
title: "Phase-1 - GSoC'18"
layout: post
date: 2018-06-08 03:00
image: /assets/images/juliaastro.png
headerImage: true
tag:
- GSoC
- life
category: blog
author: Prakhar Srivastava
description: This post describes the time spent in Community Bonding Period.
---
# Rounding off the Phase 1

As I've mentioned before that GSoC is divided into 3 phases. These phases are a medium to keep a check on the project and tap on its progress. I already laid out a well planned and sequential structure for all the phases but the amount of pressure was not anticipated. The pressure was soaring high cause I had to manage my end semester examination and GSoC project and that too in blazing heat of Delhi. Phff...


# All things wrong

Immediately after community bonding period was my practical examination during that time my progress was slow but consistent but this didn't bother me as I was quite confident that I would cover up the progress after the end of examination which were supposed to end by 6th of June. Alas! They got postponed to June 13th. JUNE 13th, I'm writing this blog 3:00 am in the morning, while I still have to prepare for my exams and write code. Multitasking++. Realizing that I'll have very less time to give for coding, I was pressurized. But I discussed everything with my mentor, he is very supportive and he helped me to reschedule and get me back to speed on the project. As of now, I'm quite confident that my Phase 1 proposed task will be over well within the deadline. Phew..!!


## Project Update

In my proposal submitted to Google for GSoC, I've mentioned everything, it contains a detailed account of which part of code will be done and by when. So, knowing that I would be somewhat caught up in exams, I proposed a total of 9 functions, which were:
- eraTdbtt
- eraTttdb
- eraDat
- eraTcbtdb
- eraTdbtcb
- eraUtctai
- eraJd2cal
- eraCal2jd
- eraD2tf

These 9 functions had to be written in pure Julia syntax. So I began with writing the code and made a few contribution, I got stuck in eraTdbtcb and eraJd2cal but eventually with help of the mentor and a bit of debugging was able to implement the code for the following function:

- [eraTdbtt](https://github.com/JuliaAstro/AstroTime.jl/pull/14) **Merged**
- [eraTttdb](https://github.com/JuliaAstro/AstroTime.jl/pull/20) **Merged**
- [eraTcbtdb](https://github.com/JuliaAstro/AstroTime.jl/pull/25) **Merged**
- [eraTdbtcb](https://github.com/JuliaAstro/AstroTime.jl/pull/24) **Merged**
- [eraJd2cal](https://github.com/JuliaAstro/AstroTime.jl/pull/23) **Merged**
- [eraCal2jd](https://github.com/JuliaAstro/AstroTime.jl/pull/29) **Merged**
- [eraD2tf](https://github.com/JuliaAstro/AstroTime.jl/pull/30) **Merged**

The following two functions needs refactoring and debugging, but I'm confident that I'll be able to finish these two within the stipulated time of 15th June 2018. Functions are:

- eraDat
- eraUtctai

With the completion of these two function, the phase 1 task of my project will be over and I'll be all set for first round of evaluation. (Ahh! I feel so relieved even while typing this!)

# Next Up?

After winding up my work of first phase, I'll work with my mentor to get a successful final evaluation and refine all the code written till now. I'll document all the necessary work and try to refactor as much as possible. Laying down a path for the successful completion of the second phase is also among these tasks.
