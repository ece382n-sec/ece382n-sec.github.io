---
title: Course Schedule, Reading List, and Slides
layout: minimal
---

# Course Schedule, Reading List, and Slides
<p class="year-tag">Fall 2026</p>
<hr>

<div class="schedule-legend" aria-label="Schedule legend">
  <span><strong>L</strong> Lecture given by the instructor</span>
  <span><strong>D</strong> Paper discussion led by student presenters</span>
</div>

<div class="schedule-tools" data-schedule-tools hidden>
  <button class="schedule-jump" type="button" data-schedule-jump>
    <span class="schedule-jump-main">Jump to next date</span>
    <span class="schedule-jump-target" data-schedule-jump-target>Finding upcoming card</span>
  </button>
</div>

<section class="schedule-week" id="week-1" markdown="1">
## Week 1: Bootstrap

<div class="schedule-day" markdown="1">
<div class="schedule-date">Aug 24<span>Mon</span></div>

### <span class="session-type">L</span> Course Logistics

**Readings:** Please fill this [anonymous course-preparation survey](https://forms.gle/spe4sKf9ng72M3d77){:target="_blank"} **after the first class** and before Aug 28 (Fri). You need to sign into your UTMail account.

**Materials:** [Slides](files/L0%20-%20Course%20Overview.pdf)
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Aug 26<span>Wed</span></div>

### <span class="session-type">L</span> Topic Overview and Project Ideas

**Materials:** [Slides](files/L1%20-%20Course%20Speedrun.pdf)
</div>
</section>

<section class="schedule-week" id="week-2" markdown="1">
## Week 2: Microarchitectural Side Channels

<div class="schedule-day" markdown="1">
<div class="schedule-date">Aug 31<span>Mon</span></div>

### <span class="session-type">L</span> Cache-Based Side Channels (w/ Demo!)

**Pre-lecture:** Please watch this conference presentation [Link](https://www.youtube.com/watch?v=px7Fy6Ehj2s){:target="_blank"}

**Post-lecture:** Choose one to review:
- Last-Level Cache Side-Channel Attacks are Practical (SP &#39;15) [Link](https://yuval.yarom.org/pdfs/LiuYGHL15.pdf){:target="_blank"}
- Theory and Practice of Finding Eviction Sets (SP &#39;19) [Link](https://www.computer.org/csdl/proceedings-article/sp/2019/666000a039/1dlwkwPrlCw){:target="_blank"}

**Materials:** [Slides](files/L2%20-%20Cache%20Side%20Channels.pdf), [PoC](https://github.com/ece382n-sec/Example-PoCs){:target="_blank"}
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Sep 2<span>Wed</span></div>

### <span class="session-type">L</span> Side Channels in Public Clouds (w/ Demo!)

**Pre-lecture:** Please read this short article on serverless computing [Link](https://aws.amazon.com/what-is/serverless-computing/){:target="_blank"}

**Optional:**
- Hey, you, get off of my cloud: exploring information leakage in third-party compute clouds (CCS &#39;09) [Link](https://dl.acm.org/doi/10.1145/1653662.1653687){:target="_blank"}
- Everywhere All at Once: Co-Location Attacks on Public Cloud FaaS (ASPLOS &#39;24) [Link](https://zzrcxb.me/files/papers/ASPLOS24-Everywhere.pdf){:target="_blank"}

**Materials:** [Slides](files/L3%20-%20Side%20Channels%20in%20Public%20Cloud.pdf)
</div>
</section>

<section class="schedule-week" id="week-3" markdown="1">
## Week 3: Transient Execution Attacks

<div class="schedule-day schedule-break" markdown="1">
<div class="schedule-date">Sep 7<span>Mon</span></div>

### Labor Day
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Sep 9<span>Wed</span></div>
### <span class="session-type">L</span> Spectre and Meltdown (w/ Demo!)

**Pre-lecture:** Conference presentation of Spectre Attacks [Link](https://www.youtube.com/watch?v=zOvBHxMjNls){:target="_blank"}


**Post-lecture:** Choose one to review:
- An Analysis of Speculative Type Confusion Vulnerabilities in the Wild (USENIX Sec &#39;21) [Link](https://www.usenix.org/conference/usenixsecurity21/presentation/kirzner){:target="_blank"}
- A Systematic Evaluation of Transient Execution Attacks and Defenses [Link](https://www.usenix.org/conference/usenixsecurity19/presentation/canella){:target="_blank"}

**Materials:** [Slides](files/L4%20-%20Spectre%20and%20Meltdown.pdf), [PoC](https://github.com/ece382n-sec/Example-PoCs){:target="_blank"}
</div>
</section>

<section class="schedule-week" id="week-4" markdown="1">
## Week 4: Side-Channel Defenses

<div class="schedule-day" markdown="1">
<div class="schedule-date">Sep 14<span>Mon</span></div>

### <span class="session-type">L</span> Data-Oblivious Computation

**Pre-lecture:** Guidelines for Mitigating Timing Side Channels Against Cryptographic Implementations by Intel [Link](https://www.intel.com/content/www/us/en/developer/articles/technical/software-security-guidance/secure-coding/mitigate-timing-side-channel-crypto-implementation.html){:target="_blank"}

**Optional:**
- Oblivious RAM by Elaine Shi [Link](https://elaineshi.com/docs/oramlecture.pdf){:target="_blank"}
- Cryptocoding by Jean-Philippe Aumasson [Link](https://github.com/veorq/cryptocoding){:target="_blank"}

**Materials:** [Slides](files/L5%20-%20Data-Oblivious%20Computation.pdf)
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Sep 16<span>Wed</span></div>

### <span class="session-type">L</span> Spectre Defenses

**Pre-lecture:** How Linux patches Spectre v1 gadgets (please read Links 1–3 in order) [Link 1](https://www.kernel.org/doc/html/v6.0/staging/speculation.html){:target="_blank"}, [Link 2](https://github.com/torvalds/linux/blob/2f0c1cf72f4682178506f513bbf015e591b1aa4a/include/linux/nospec.h#L55){:target="_blank"}, [Link 3](https://lwn.net/Articles/752408/){:target="_blank"}

**Post-lecture:** Choose one to review:
- Efficient Invisible Speculative Execution through Selective Delay and Value Prediction (ISCA &#39;19) [Link](https://dl.acm.org/doi/10.1145/3307650.3322216){:target="_blank"}
- Speculative Taint Tracking (STT): A Comprehensive Protection for Speculatively Accessed Data (MICRO &#39;19) [Link](https://dl.acm.org/doi/10.1145/3352460.3358274){:target="_blank"}

**Materials:** [Slides](files/L6%20-%20Spectre%20Defense.pdf)
</div>
</section>

<section class="schedule-week" id="week-5" markdown="1">
## Week 5: Trusted Computing

<div class="schedule-day" markdown="1">
<div class="schedule-date">Sep 21<span>Mon</span></div>

### <span class="session-type">L</span> Hardware Root of Trust and Secure Coprocessors

**Optional:**
- Cryptographic processors – a survey [Link](https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-641.pdf){:target="_blank"}
- The Secure Enclave -- Apple Platform Security [Link](https://support.apple.com/guide/security/the-secure-enclave-sec59b0b31ff/web){:target="_blank"}
- Titanium hardware security architecture at Google [Link](https://docs.cloud.google.com/docs/security/titanium-hardware-security-architecture){:target="_blank"}
- Titanium hardware security architecture at Google [Link](https://docs.cloud.google.com/docs/security/titanium-hardware-security-architecture){:target="_blank"}

</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Sep 23<span>Wed</span></div>

### <span class="session-type">L</span> Trusted Execution Environments (TEEs)

**Post-lecture:** Choose one to review:
- Controlled-Channel Attacks: Deterministic Side Channels for Untrusted Operating Systems (SP &#39;15) [Link](https://www.ieee-security.org/TC/SP2015/papers-archived/6949a640.pdf){:target="_blank"}
- MicroScope: Enabling Microarchitectural Replay Attacks (ISCA &#39;19) [Link](https://www.cs.cmu.edu/~dskarlat/publications/microScope_isca19.pdf){:target="_blank"}

**Optional:** Intel SGX Explained [Link](https://eprint.iacr.org/2016/086.pdf){:target="_blank"}

</div>
</section>

<section class="schedule-week" id="week-6" markdown="1">
## Week 6: Memory Security

<div class="schedule-day" markdown="1">
<div class="schedule-date">Sep 28<span>Mon</span></div>

### <span class="session-type">L</span> Memory Encryption and Integrity Protection
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Sep 30<span>Wed</span></div>

### <span class="session-type">L</span> Memory Safety--Attacks

</div>
</section>

<section class="schedule-week" id="week-7" markdown="1">
## Week 7: Memory Safety and Physical Attacks

<div class="schedule-day" markdown="1">
<div class="schedule-date">Oct 5<span>Mon</span></div>

### <span class="session-type">L</span> Memory Safety--Defense

</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Oct 7<span>Wed</span></div>

### <span class="session-type">D</span> Physical Attacks

</div>
</section>

<section class="schedule-week" id="week-8" markdown="1">
## Week 8: Paper Discussion

<div class="schedule-day" markdown="1">
<div class="schedule-date">Oct 12<span>Mon</span></div>

### <span class="session-type">D</span> TBA
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Oct 14<span>Wed</span></div>

### <span class="session-type">D</span> TBA

</div>
</section>

<section class="schedule-week" id="week-9" markdown="1">
## Week 9: Paper Discussion

<div class="schedule-day" markdown="1">
<div class="schedule-date">Oct 19<span>Mon</span></div>

### <span class="session-type">D</span> TBA

</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Oct 21<span>Wed</span></div>

### <span class="session-type">D</span> TBA

</div>
</section>

<section class="schedule-week" id="week-10" markdown="1">
## Week 10: Paper Discussion

<div class="schedule-day" markdown="1">
<div class="schedule-date">Oct 26<span>Mon</span></div>

### <span class="session-type">D</span> TBA


</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Oct 28<span>Wed</span></div>

### <span class="session-type">D</span> TBA


</div>
</section>

<section class="schedule-week" id="week-11" markdown="1">
## Week 11: Paper Discussion

<div class="schedule-day" markdown="1">
<div class="schedule-date">Nov 2<span>Mon</span></div>

### <span class="session-type">D</span> TBA

</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Nov 4<span>Wed</span></div>

### <span class="session-type">D</span> TBA

</div>
</section>

<section class="schedule-week" id="week-12" markdown="1">
## Week 12: Paper Discussion

<div class="schedule-day" markdown="1">
<div class="schedule-date">Nov 9<span>Mon</span></div>

### <span class="session-type">D</span> TBA

</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Nov 11<span>Wed</span></div>

### <span class="session-type">D</span> TBA

</div>
</section>

<section class="schedule-week" id="week-13" markdown="1">
## Week 13: Paper Discussion

<div class="schedule-day" markdown="1">
<div class="schedule-date">Nov 16<span>Mon</span></div>

### <span class="session-type">D</span> TBA

</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Nov 18<span>Wed</span></div>

### <span class="session-type">D</span> TBA

</div>
</section>

<section class="schedule-week" id="week-14" markdown="1">
## Week 14: Fall Break

<div class="schedule-day schedule-break" markdown="1">
<div class="schedule-date">Nov 23-Nov 27<span></span></div>

### Fall Break

**Optional:** Watch "WarGames (1983)"
</div>
</section>

<section class="schedule-week" id="week-15" markdown="1">
## Week 15: Summary and Project Presentations

<div class="schedule-day" markdown="1">
<div class="schedule-date">Nov 30<span>Mon</span></div>

### Reflect and Chat (with free food!)
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Dec 2<span>Wed</span></div>

### Final Presentation (1)
</div>
</section>

<section class="schedule-week" id="week-16" markdown="1">
## Week 16: Project Presentations

<div class="schedule-day" markdown="1">
<div class="schedule-date">Dec 7<span>Mon</span></div>

### Final Presentation (2)
</div>
</section>

<script>
(function () {
  var button = document.querySelector("[data-schedule-jump]");
  if (!button) return;

  var tools = button.closest("[data-schedule-tools]");
  var targetLabel = button.querySelector("[data-schedule-jump-target]");
  var yearTag = document.querySelector(".year-tag");
  var yearMatch = yearTag && yearTag.textContent.match(/20\d{2}/);
  var courseYear = yearMatch ? Number(yearMatch[0]) : new Date().getFullYear();
  var months = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11
  };

  function dateText(dateElement) {
    return (dateElement.childNodes[0] && dateElement.childNodes[0].nodeValue || "").trim();
  }

  function parseMonthDay(value, fallbackMonth) {
    var match = value.trim().match(/^([A-Za-z]{3})?\s*(\d{1,2})$/);
    if (!match) return null;
    var monthName = match[1] || fallbackMonth;
    if (!Object.prototype.hasOwnProperty.call(months, monthName)) return null;
    return { monthName: monthName, month: months[monthName], day: Number(match[2]) };
  }

  function parseRange(value) {
    var parts = value.split("-").map(function (part) { return part.trim(); });
    var start = parseMonthDay(parts[0]);
    if (!start) return null;
    var end = parts[1] ? parseMonthDay(parts[1], start.monthName) : start;
    if (!end) return null;
    return {
      start: new Date(courseYear, start.month, start.day),
      end: new Date(courseYear, end.month, end.day)
    };
  }

  var cards = Array.prototype.slice.call(document.querySelectorAll(".schedule-day")).map(function (card) {
    var dateElement = card.querySelector(".schedule-date");
    if (!dateElement) return null;
    var text = dateText(dateElement);
    var weekday = dateElement.querySelector("span");
    return {
      card: card,
      date: text,
      weekday: weekday ? weekday.textContent.trim() : "",
      range: parseRange(text)
    };
  }).filter(function (entry) {
    return entry && entry.range;
  });

  var today = new Date();
  today.setHours(0, 0, 0, 0);

  var upcoming = cards.find(function (entry) {
    return entry.range.end >= today;
  });

  if (!upcoming) {
    button.disabled = true;
    targetLabel.textContent = "Semester complete";
    button.setAttribute("aria-label", "No upcoming schedule cards");
    if (tools) tools.hidden = false;
    return;
  }

  var displayDate = upcoming.date + (upcoming.weekday ? " " + upcoming.weekday : "");
  targetLabel.textContent = displayDate;
  button.setAttribute("aria-label", "Jump to upcoming schedule card: " + displayDate);
  if (tools) tools.hidden = false;

  function stickyHeaderOffset() {
    var header = document.querySelector(".main-header");
    var headerHeight = header ? header.getBoundingClientRect().height : 0;
    return headerHeight + 16;
  }

  button.addEventListener("click", function () {
    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var targetTop = upcoming.card.getBoundingClientRect().top + window.pageYOffset - stickyHeaderOffset();
    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
    upcoming.card.setAttribute("tabindex", "-1");
    upcoming.card.focus({ preventScroll: true });
    upcoming.card.classList.add("schedule-day-target");
    window.setTimeout(function () {
      upcoming.card.classList.remove("schedule-day-target");
    }, 1800);
  });
}());
</script>
