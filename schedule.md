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

**Readings:** Please fill this [anonymous course-preparation survey](https://forms.gle/nX2kyiBxQmFPqetQ9){:target="_blank"} **after the first class** and before Aug 27 (Thu).

**Materials:** [Slides](https://docs.google.com/presentation/d/188onoHX-T-CbIo1eKGBL697aUNOY_zA5BTwOMLv4R9I/edit?usp=sharing){:target="_blank"}
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Aug 26<span>Wed</span></div>

### <span class="session-type">L</span> Topic Overview and Project Ideas

**Materials:** [Slides](https://utexas-my.sharepoint.com/:p:/g/personal/zz9427_eid_utexas_edu/EVFPHPN0hvhBlwCDUoXud4cBcAiRqi82pCe8e9sDfqMJHg?e=NPQf9r){:target="_blank"}
</div>
</section>

<section class="schedule-week" id="week-2" markdown="1">
## Week 2: uArch Side Channels

<div class="schedule-day" markdown="1">
<div class="schedule-date">Aug 31<span>Mon</span></div>

### <span class="session-type">L</span> Cache-Based Side Channels (w/ Demo!)

**Pre-lecture:** Flush+Reload: A High Resolution, Low Noise, L3 Cache Side-Channel Attack (USENIX Sec &#39;14, Sections 1-3) [Link](https://www.usenix.org/conference/usenixsecurity14/technical-sessions/presentation/yarom){:target="_blank"}

**Post-lecture:** Choose one to review:
- Last-Level Cache Side-Channel Attacks are Practical (SP &#39;15) [Link](https://yuval.yarom.org/pdfs/LiuYGHL15.pdf){:target="_blank"}
- Theory and Practice of Finding Eviction Sets (SP &#39;19) [Link](https://www.computer.org/csdl/proceedings-article/sp/2019/666000a039/1dlwkwPrlCw){:target="_blank"}

**Materials:** [Slides](files/L1%20-%20Cache%20Side%20Channels.pdf), [PoC](https://github.com/ece382n-sec/Example-PoCs){:target="_blank"}
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Sep 2<span>Wed</span></div>

### <span class="session-type">L</span> Side Channels in Public Clouds (w/ Demo!)

**Pre-lecture:** Hey, You, Get Off of My Cloud: Exploring Information Leakage in Third-Party Compute Clouds (CCS &#39;09, Sections 1-3, 6) [Link](https://rist.tech.cornell.edu/papers/cloudsec.pdf){:target="_blank"}

**Post-lecture:** Everywhere All at Once: Co-Location Attacks on Public Cloud FaaS (ASPLOS &#39;24) [Link](https://zzrcxb.me/files/papers/ASPLOS24-Everywhere.pdf){:target="_blank"}

**Materials:** [Slides](files/L2%20-%20Side%20Channels%20in%20Public%20Cloud.pdf)
</div>
</section>

<section class="schedule-week" id="week-3" markdown="1">
## Week 3: uArch Side Channels

<div class="schedule-day schedule-break" markdown="1">
<div class="schedule-date">Sep 7<span>Mon</span></div>

### Labor Day
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Sep 9<span>Wed</span></div>

### <span class="session-type">L</span> Partitioning, Randomization, and Detection

**Pre-lecture:** CATalyst: Defeating Last-Level Cache Side Channel Attacks in Cloud Computing (HPCA &#39;16, Sections 1-3) [Link](https://class.ece.iastate.edu/tyagi/cpre581/papers/HPCA16Catalyst.pdf){:target="_blank"}

**Note:** No post-lecture reading; please focus on your term project proposal.

**Optional:** A Game of Cache Attacks and Defense by Moinuddin Qureshi at [MAD tutorial](https://sites.google.com/view/mad-isca22){:target="_blank"} (ISCA &#39;22) [Link](https://docs.google.com/presentation/d/1TezFuMWDTNXdEq-o2tuAN62myVBqD7To/edit?usp=sharing&ouid=109395281671520631390&rtpof=true&sd=true){:target="_blank"}

**Materials:** [Slides](files/L3%20-%20Partitioning,%20Randomization,%20and%20Detection.pdf)
</div>
</section>

<section class="schedule-week" id="week-4" markdown="1">
## Week 4: Data-Oblivious Computation and Speculation

<div class="schedule-day" markdown="1">
<div class="schedule-date">Sep 14<span>Mon</span></div>

### <span class="session-type">L</span> Data-Oblivious Computation

**Pre-lecture:** Guidelines for Mitigating Timing Side Channels Against Cryptographic Implementations by Intel [Link](https://www.intel.com/content/www/us/en/developer/articles/technical/software-security-guidance/secure-coding/mitigate-timing-side-channel-crypto-implementation.html){:target="_blank"}

**Optional:**
- Oblivious RAM by Elaine Shi [Link](https://elaineshi.com/docs/oramlecture.pdf){:target="_blank"}
- Cryptocoding by Jean-Philippe Aumasson [Link](https://github.com/veorq/cryptocoding){:target="_blank"}

**Materials:** [Slides](files/L4%20-%20Data-Oblivious%20Computation.pdf), [PoC](https://github.com/ece382n-sec/Example-PoCs/tree/main/Strcmp){:target="_blank"}
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Sep 16<span>Wed</span></div>

### <span class="session-type">L</span> Transient-Execution Attacks (w/ Demo!)

**Pre-lecture:** Conference presentation of Spectre Attacks [Link](https://www.youtube.com/watch?v=zOvBHxMjNls){:target="_blank"}

**Optional:**
- Spectre Attacks: Exploiting Speculative Execution [Link](https://spectreattack.com/spectre.pdf){:target="_blank"}
- Meltdown: Reading Kernel Memory from User Space [Link](https://meltdownattack.com/meltdown.pdf){:target="_blank"}
- A Systematic Evaluation of Transient Execution Attacks and Defenses [Link](https://www.usenix.org/conference/usenixsecurity19/presentation/canella){:target="_blank"}

**Materials:** [Slides](files/L5%20-%20Spectre%20and%20Meltdown.pdf), [PoC](https://github.com/ece382n-sec/Example-PoCs/tree/main/Spectre){:target="_blank"}
</div>
</section>

<section class="schedule-week" id="week-5" markdown="1">
## Week 5: Speculation

<div class="schedule-day" markdown="1">
<div class="schedule-date">Sep 21<span>Mon</span></div>

### <span class="session-type">D</span> Advanced Spectre Attacks

**Papers to discuss:** Choose one to review:
- An Analysis of Speculative Type Confusion Vulnerabilities in the Wild (USENIX Sec &#39;21) [Link](https://www.usenix.org/conference/usenixsecurity21/presentation/kirzner){:target="_blank"}
- Branch History Injection: On the Effectiveness of Hardware Mitigations Against Cross-Privilege Spectre-v2 Attacks (USENIX Sec &#39;22) [Link](https://www.usenix.org/conference/usenixsecurity22/presentation/barberis){:target="_blank"}

**Optional:**
- Retpoline: a software construct for preventing branch-target-injection [Link](https://support.google.com/faqs/answer/7625886){:target="_blank"}
- RETBLEED: Arbitrary Speculative Code Execution with Return Instructions [Link](https://www.usenix.org/conference/usenixsecurity22/presentation/wikner){:target="_blank"}
- The AMD Branch (Mis)predictor: Just Set it and Forget it! ([Part 1](https://grsecurity.net/amd_branch_mispredictor_just_set_it_and_forget_it){:target="_blank"}, [Part 2](https://grsecurity.net/amd_branch_mispredictor_part_2_where_no_cpu_has_gone_before){:target="_blank"})
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Sep 23<span>Wed</span></div>

### <span class="session-type">D</span> Hardware Defenses

**Papers to discuss:** Choose one to review:
- Efficient Invisible Speculative Execution through Selective Delay and Value Prediction (ISCA &#39;19) [Link](https://dl.acm.org/doi/10.1145/3307650.3322216){:target="_blank"}
- Speculative Taint Tracking (STT): A Comprehensive Protection for Speculatively Accessed Data (MICRO &#39;19) [Link](https://dl.acm.org/doi/10.1145/3352460.3358274){:target="_blank"}

**Optional:**
- Speculative interference attacks: breaking invisible speculation schemes [Link](https://dl.acm.org/doi/10.1145/3445814.3446708){:target="_blank"}
- Speculative Data-Oblivious Execution: Mobilizing Safe Prediction For Safe and Efficient Speculative Execution [Link](https://ieeexplore.ieee.org/document/9138997){:target="_blank"}
</div>
</section>

<section class="schedule-week" id="week-6" markdown="1">
## Week 6: Trusted Execution Environments (TEEs)

<div class="schedule-day" markdown="1">
<div class="schedule-date">Sep 28<span>Mon</span></div>

### <span class="session-type">L</span> TEE Overview and Attestation

**Optional:** Intel SGX Explained [Link](https://eprint.iacr.org/2016/086.pdf){:target="_blank"}

**Materials:** [Slides](files/L6%20-%20TEE%20Overview%20and%20Attestation.pdf)
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Sep 30<span>Wed</span></div>

### <span class="session-type">L</span> Memory Encryption and Integrity Protection

**Optional:**
- Efficient Memory Integrity Verification and Encryption for Secure Processors [Link](https://microarch.org/micro36/html/pdf/suh-EfficMemory.pdf){:target="_blank"}
- Using Address Independent Seed Encryption and Bonsai Merkle Trees to Make Secure Processors OS- and Performance-Friendly [Link](https://faculty.cc.gatech.edu/~milos/rogers_micro07.pdf){:target="_blank"}

**Materials:** [Slides](files/L7%20-%20Memory%20Encryption%20and%20Integrity%20Protection.pdf)
</div>
</section>

<section class="schedule-week" id="week-7" markdown="1">
## Week 7: Trusted Execution Environments (TEEs)

<div class="schedule-day" markdown="1">
<div class="schedule-date">Oct 5<span>Mon</span></div>

### <span class="session-type">L</span> TEE Designs

**Pre-lecture:** (Presentation) Keystone: An Open Framework for Architecting Trusted Execution Environments [Link](https://www.youtube.com/watch?v=lQu95We1Lmc){:target="_blank"}

**Materials:** [Slides](files/L8%20-%20TEE%20Designs.pdf)
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Oct 7<span>Wed</span></div>

### <span class="session-type">D</span> Attacks on TEEs

**Papers to discuss:** Choose one to review:
- Controlled-Channel Attacks: Deterministic Side Channels for Untrusted Operating Systems (SP &#39;15) [Link](https://www.ieee-security.org/TC/SP2015/papers-archived/6949a640.pdf){:target="_blank"}
- MicroScope: Enabling Microarchitectural Replay Attacks (ISCA &#39;19) [Link](https://www.cs.cmu.edu/~dskarlat/publications/microScope_isca19.pdf){:target="_blank"}
</div>
</section>

<section class="schedule-week" id="week-8" markdown="1">
## Week 8: Isolation and Memory Safety

<div class="schedule-day" markdown="1">
<div class="schedule-date">Oct 12<span>Mon</span></div>

### <span class="session-type">L</span> OS and VM Isolation

**Optional:**
- Performance Evaluation of Intel EPT Hardware Assist [Link](https://www.vmware.com/docs/perf_esx_intel-ept-eval){:target="_blank"}
- A Comparison of Software and Hardware Techniques for x86 Virtualization [Link](https://web.stanford.edu/class/cs240/readings/hwsw.pdf){:target="_blank"}
- My VM is Lighter (and Safer) than your Container [Link](https://dl.acm.org/doi/10.1145/3132747.3132763){:target="_blank"}
- Firecracker: Lightweight Virtualization for Serverless Applications [Link](https://www.usenix.org/system/files/nsdi20-paper-agache.pdf){:target="_blank"}
- Blending Containers and Virtual Machines: A Study of Firecracker and gVisor [Link](https://pages.cs.wisc.edu/~swift/papers/vee20-isolation.pdf){:target="_blank"}

**Materials:** [Slides](files/L9%20-%20OS%20and%20VM%20Isolation.pdf)
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Oct 14<span>Wed</span></div>

### <span class="session-type">L</span> Memory Safety

**Pre-lecture:** Running a Buffer Overflow Attack - Computerphile [Link](https://www.youtube.com/watch?v=1S0aBV-Waeo){:target="_blank"}

**Optional:**
- SoK: Eternal War in Memory [Link](https://people.eecs.berkeley.edu/~dawnsong/papers/Oakland13-SoK-CR.pdf){:target="_blank"}
- An Introduction to CHERI [Link](https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-941.pdf){:target="_blank"}
- No-FAT: Architectural Support for Low Overhead Memory Safety Checks [Link](https://www.cs.columbia.edu/~mtarek/files/preprint_ISCA21_NoFAT.pdf){:target="_blank"}
- SPECCFI: Mitigating Spectre Attacks using CFI Informed Speculation [Link](https://www.cs.ucr.edu/~csong/oakland20-speccfi.pdf){:target="_blank"}

**Materials:** [Slides](files/L10%20-%20Memory%20Safety.pdf)
</div>
</section>

<section class="schedule-week" id="week-9" markdown="1">
## Week 9: Isolation and Memory Safety

<div class="schedule-day" markdown="1">
<div class="schedule-date">Oct 19<span>Mon</span></div>

### <span class="session-type">D</span> In-Process Isolation

**Papers to discuss:** Choose one to review:
- Donky: Domain Keys--Efficient In-Process Isolation for RISC-V and x86 (USENIX &#39;20) [Link](https://www.usenix.org/system/files/sec20-schrammel.pdf){:target="_blank"}
- Going beyond the Limits of SFI: Flexible and Secure Hardware-Assisted In-Process Isolation with HFI (ASPLOS &#39;23) [Link](https://dl.acm.org/doi/10.1145/3582016.3582023){:target="_blank"}
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Oct 21<span>Wed</span></div>

### <span class="session-type">D</span> Transient Execution + Memory Safety

**Papers to discuss:** Choose one to review:
- Speculative Probing: Hacking Blind in the Spectre Era (CCS &#39;20) [Link](https://download.vusec.net/papers/blindside_ccs20.pdf){:target="_blank"}
- PACMAN: Attacking ARM Pointer Authentication with Speculative Execution (ISCA &#39;22) [Link](https://pacmanattack.com/paper.pdf){:target="_blank"}
</div>
</section>

<section class="schedule-week" id="week-10" markdown="1">
## Week 10: RowHammer and Inspiring Papers/Ideas

<div class="schedule-day" markdown="1">
<div class="schedule-date">Oct 26<span>Mon</span></div>

### <span class="session-type">L</span> RowHammer

**Optional:**
- The Story of Rowhammer [Link](https://www.youtube.com/watch?v=sgd7PHQQ1AI){:target="_blank"}
- Flipping Bits in Memory Without Accessing Them: An Experimental Study of DRAM Disturbance Errors [Link](https://users.ece.cmu.edu/~yoonguk/papers/kim-isca14.pdf){:target="_blank"}
- Graphene: Strong yet Lightweight RowHammer Protection [Link](https://microarch.org/micro53/papers/738300a001.pdf){:target="_blank"}
- ProTRR: Principled yet Optimal In-DRAM Target Row Refresh [Link](https://ieeexplore.ieee.org/document/9833664/){:target="_blank"}

**Materials:** [Slides](files/L11%20-%20RowHammer.pdf)
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Oct 28<span>Wed</span></div>

### <span class="session-type">D</span> Attacking AI Systems

**Papers to discuss:** Choose one to review:
- MoEcho: Exploiting Side-Channel Attacks to Compromise User Privacy in Mixture-of-Experts LLMs (CCS &#39;25) [Link](https://arxiv.org/abs/2508.15036){:target="_blank"}
- I Know What You Asked: Prompt Leakage via KV-Cache Sharing in Multi-Tenant LLM Serving (NDSS &#39;25) [Link](https://www.ndss-symposium.org/ndss-paper/i-know-what-you-asked-prompt-leakage-via-kv-cache-sharing-in-multi-tenant-llm-serving/){:target="_blank"}
</div>
</section>

<section class="schedule-week" id="week-11" markdown="1">
## Week 11: Inspiring Papers/Ideas

<div class="schedule-day" markdown="1">
<div class="schedule-date">Nov 2<span>Mon</span></div>

### <span class="session-type">D</span> Emerging TEE Designs

**Papers to discuss:** Choose one to review:
- Graviton: Trusted Execution Environments on GPUs (OSDI &#39;18) [Link](https://www.usenix.org/conference/osdi18/presentation/volos){:target="_blank"}
- Sequestered Encryption: A Hardware Technique for Comprehensive Data Privacy (SEED &#39;22) [Link](https://ieeexplore.ieee.org/document/9935044){:target="_blank"}

**Optional:**
- Creating the First Confidential GPUs [Link](https://cacm.acm.org/practice/creating-the-first-confidential-gpus/){:target="_blank"}
- Security Verification of Low-Trust Architectures (CCS &#39;23) [Link](https://dl.acm.org/doi/10.1145/3576915.3616643){:target="_blank"}
- Privacy-enhanced computation via sequestered encryption (US Patent) [Link](https://patentimages.storage.googleapis.com/f1/da/9f/89cc38c496264c/US12105855.pdf){:target="_blank"}
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Nov 4<span>Wed</span></div>

### <span class="session-type">D</span> uArch Weird Machines

**Papers to discuss:** Choose one to review:
- Computing with Time: Microarchitectural Weird Machines (ASPLOS &#39;21) [Link](https://dl.acm.org/doi/10.1145/3445814.3446729){:target="_blank"}
- The Gates of Time: Improving Cache Attacks with Transient Execution (USENIX Sec &#39;23) [Link](https://www.usenix.org/conference/usenixsecurity23/presentation/katzman){:target="_blank"}
</div>
</section>

<section class="schedule-week" id="week-12" markdown="1">
## Week 12: Inspiring Papers/Ideas

<div class="schedule-day" markdown="1">
<div class="schedule-date">Nov 9<span>Mon</span></div>

### <span class="session-type">L</span> Information-Flow Tracking in Hardware

**Paper to discuss:** Choose one to review:
- Complete Information Flow Tracking from the Gates Up (ASPLOS &#39;09) [Link](https://dl.acm.org/doi/10.1145/1508244.1508258){:target="_blank"}
- Speculative Privacy Tracking (SPT): Leaking Information From Speculative Execution Without Compromising Privacy (MICRO &#39;21) [Link](https://cwfletcher.github.io/content/research/2021.micro.spt.paper.pdf){:target="_blank"}

**Materials:** [Slides](files/L12%20-%20Information-Flow%20Tracking%20in%20Hardware.pdf)
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Nov 11<span>Wed</span></div>

### <span class="session-type">D</span> Fun Side Channels

**Papers to discuss:** Choose one to review:
- Hertzbleed: Turning Power Side-Channel Attacks Into Remote Timing Attacks on x86 (USENIX Sec &#39;22) [Link](https://www.usenix.org/conference/usenixsecurity22/presentation/wang-yingchen){:target="_blank"}
- Pentimento: Data Remanence in Cloud FPGAs (ASPLOS &#39;24) [Link](https://dl.acm.org/doi/10.1145/3620665.3640355){:target="_blank"}

**Optional:**
- DVFS Frequently Leaks Secrets: Hertzbleed Attacks Beyond SIKE, Cryptography, and CPU-Only Data [Link](https://www.hertzbleed.com/2h2b.pdf){:target="_blank"}
- Hot Pixels: Frequency, Power, and Temperature Attacks on GPUs and Arm SoCs [Link](https://www.usenix.org/system/files/usenixsecurity23-taneja.pdf){:target="_blank"}
- Advice from DJB [Link](https://timing.attacks.cr.yp.to/overclocking.html){:target="_blank"}
</div>
</section>

<section class="schedule-week" id="week-13" markdown="1">
## Week 13: Inspiring Papers/Ideas

<div class="schedule-day" markdown="1">
<div class="schedule-date">Nov 16<span>Mon</span></div>

### <span class="session-type">D</span> Attacks on GPU

**Paper to discuss:**
- BarraCUDA: Edge GPUs do Leak DNN Weights (USENIX Sec &#39;25) [Link](https://www.usenix.org/conference/usenixsecurity25/presentation/horvath){:target="_blank"}
- GPU.zip: On the Side-Channel Implications of Hardware-Based Graphical Data Compression (SP &#39;24) [Link](https://www.computer.org/csdl/proceedings-article/sp/2024/313000a084/1RjEaSnpO3m){:target="_blank"}

**Optional:**
- On Subnormal Floating Point and Abnormal Timing [Link](https://homes.cs.washington.edu/~dkohlbre/papers/subnormal.pdf){:target="_blank"}
- Pixnapping Attack [Link](https://www.pixnapping.com/){:target="_blank"}
</div>

<div class="schedule-day" markdown="1">
<div class="schedule-date">Nov 18<span>Wed</span></div>

### <span class="session-type">D</span> SW & HW Fuzzing

**Papers to discuss:** Choose one to review:
- SpecFuzz: Bringing Spectre-Type Vulnerabilities to the Surface (USENIX Sec &#39;20) [Link](https://www.usenix.org/conference/usenixsecurity20/presentation/oleksenko){:target="_blank"}
- Cascade: CPU Fuzzing via Intricate Program Generation (USENIX Sec &#39;24) [Link](https://www.usenix.org/conference/usenixsecurity24/presentation/solt){:target="_blank"}

**Optional videos on hardware fuzzing:**
- The Discovery of Zenbleed ft. Tavis Ormandy by LiveOverflow [Link](https://www.youtube.com/watch?v=neWc0H1k2Lc){:target="_blank"}
- Breaking the x86 Instruction Set by Christopher Domas at BlackHat &#39;17 [Link](https://www.youtube.com/watch?v=KrksBdWcZgQ){:target="_blank"}
</div>
</section>

<section class="schedule-week" id="week-14" markdown="1">
## Week 14: Fall Break

<div class="schedule-day schedule-break" markdown="1">
<div class="schedule-date">Nov 23-Nov 28<span>Mon-Sat</span></div>

### Fall Break

**Optional reading:** *Why We Sleep* by Matthew Walker
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
