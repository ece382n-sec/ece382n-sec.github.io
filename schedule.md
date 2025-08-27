---
title: Course Schedule, Reading List, and Slides
layout: minimal
---

# Course Schedule, Reading List, and Slides
<p class="year-tag">Fall 2025</p>
<hr>

## Course Schedule (Tentative)

(L) = Lecture given by the instructor\\
(D) = Paper discussion led by student presenters

<style type="text/css">
th, td {
  min-width: 2rem !important;
  /* text-align: center; */
  border-color:rgb(200, 200, 200) !important;
}

th {
  background-color:#bf5700;
  color:#fdf6e3;
}

.week {
  writing-mode: sideways-lr;
  padding: 0.25rem;
  text-align: center;
}

.date {
  border-left: 1px solid rgb(200, 200, 200) !important;
  min-width: 4.0rem !important;
  padding: 0.25rem;
  text-align: center;
}

.break {
  background-color:rgba(191, 86, 0, 0.15);
  text-align: center;
}

ul.inline {
  margin-bottom: 0 !important;
}

</style>

<table><thead>
  <tr>
    <th></th>
    <th>Date</th>
    <th>Theme</th>
    <th>Topic</th>
    <th>Readings</th>
    <th>Slides</th>
  </tr></thead>
<tbody>
  <tr>
    <td rowspan="2" class="week" id="week-1">Week 1</td>
    <td class="date">Aug 25</td>
    <td rowspan="2">Bootstrap</td>
    <td>(L) Course Logistics</td>
    <td>Please fill this <a href="https://forms.gle/nX2kyiBxQmFPqetQ9" target="_blank">anonymous course-preparation survey</a> <strong>after the first class</strong> and before Aug 28 (Thu)</td>
    <td><a href="https://docs.google.com/presentation/d/188onoHX-T-CbIo1eKGBL697aUNOY_zA5BTwOMLv4R9I/edit?usp=sharing" target="_blank">Slides</a></td>
  </tr>
  <tr>
    <td class="date">Aug 27</td>
    <td>(L) Topic Overview and Project Ideas</td>
    <td>-</td>
    <td><a href="https://utexas-my.sharepoint.com/:p:/g/personal/zz9427_eid_utexas_edu/EVFPHPN0hvhBlwCDUoXud4cBcAiRqi82pCe8e9sDfqMJHg?e=NPQf9r" target="_blank">Slides</a></td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-2">Week 2</td>
    <td class="date">Sep 1</td>
    <td colspan="4" class="break">Labor Day</td>
  </tr>
  <tr>
    <td class="date">Sep 3</td>
    <td rowspan="4">uArch<br>Side<br>Channels</td>
    <td>(L) Cache-Based Side Channels (w/ Demo!)</td>
    <td>
      <ul class="inline">
        <li><strong>Pre-lecture:</strong> Flush+Reload: A High Resolution, Low Noise, L3 Cache Side-Channel Attack</li>
        <li><strong>Post-lecture:</strong> Theory and Practice of Finding Eviction Sets</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-3">Week 3</td>
    <td class="date">Sep 8</td>
    <td>(L) Side Channels in Public Clouds (w/ Demo!)</td>
    <td>
      <ul class="inline">
        <li><strong>Pre-lecture:</strong> Hey, You, Get Off of My Cloud: Exploring Information Leakage in Third-Party Compute Clouds</li>
        <li><strong>Post-lecture:</strong> Everywhere All at Once: Co-Location Attacks on Public Cloud FaaS</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Sep 10</td>
    <td>(L) Partitioning and Randomization</td>
    <td>
      <ul class="inline">
        <li><strong>Pre-lecture:</strong> CATalyst: Defeating Last-Level Cache Side Channel Attacks in Cloud Computing</li>
        <li><strong>Post-lecture:</strong> MIRAGE: Mitigating Conflict-Based Cache Attacks  with a Practical Fully-Associative Design</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-4">Week 4</td>
    <td class="date">Sep 15</td>
    <td>(L) Data-Oblivious Computation</td>
    <td>
      <ul class="inline">
        <li><strong>Pre-lecture:</strong> (Intel) Data Operand Independent Timing Instruction Set Architecture (ISA) Guidance</li>
        <li><strong>Post-lecture:</strong> Data Oblivious ISA Extensions for Side Channel-Resistant and High Performance Computing</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Sep 17</td>
    <td rowspan="3">Speculation</td>
    <td>(L) Spectre and Meltdown (w/ Demo!)</td>
    <td>
      <ul class="inline">
        <li><strong>Pre-lecture:</strong> Spectre Attacks: Exploiting Speculative Execution</li>
        <li><strong>Post-lecture:</strong> A Systematic Evaluation of Transient Execution Attacks and Defenses</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-5">Week 5</td>
    <td class="date">Sep 22</td>
    <td>(D) Advanced Spectre Attacks</td>
    <td>
      <strong>Papers to discuss (Choose one to review):</strong><br>
      <ul class="inline">
        <li>An Analysis of Speculative Type Confusion Vulnerabilities in the Wild</li>
        <li>Branch History Injection: On the Effectiveness of Hardware Mitigations Against Cross-Privilege Spectre-v2 Attacks</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Sep 24</td>
    <td>(L) Software and Hardware Defenses</td>
    <td>
      <ul class="inline">
        <li><strong>Pre-lecture:</strong> <a href="https://llvm.org/docs/SpeculativeLoadHardening.html" target="_blank">Speculative Load Hardening</a></li>
        <li><strong>Post-lecture:</strong> Speculative Taint Tracking (STT): A Comprehensive Protection for Speculatively Accessed Data</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-6">Week 6</td>
    <td class="date">Sep 29</td>
    <td rowspan="4">Trusted<br>Execution<br>Environments<br>(TEEs)</td>
    <td>(L) Overview and Background</td>
    <td>
      <ul class="inline">
        <li><strong>Pre-lecture:</strong> Trusted Execution Environments: Properties, Applications, and Challenges</li>
        <li><strong>Post-lecture:</strong> Intel SGX Explained (Chapters 1--3)</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Oct 1</td>
    <td>(L) Memory Encryption and Authentication</td>
    <td>
      <ul class="inline">
        <li><strong>Pre-lecture:</strong> Efficient Memory Integrity Verification and Encryption for Secure Processors</li>
        <li><strong>Post-lecture:</strong> Using Address Independent Seed Encryption and Bonsai Merkle Trees to Make Secure Processors OS- and Performance-Friendly</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-7">Week 7</td>
    <td class="date">Oct 6</td>
    <td>(L) TEE Designs</td>
    <td>
      <ul class="inline">
        <!-- <li><strong>Pre-lecture:</strong> </li> -->
        <li><strong>Post-lecture:</strong> Keystone: An Open Framework for Architecting Trusted Execution Environments</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Oct 8</td>
    <td>(D) Attacks on TEEs</td>
    <td>
      <strong>Papers to discuss (Choose one to review):</strong><br>
      <ul class="inline">
        <li>Controlled-Channel Attacks: Deterministic Side Channels for Untrusted Operating Systems</li>
        <li>MicroScope: Enabling Microarchitectural Replay Attacks</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-8">Week 8</td>
    <td class="date">Oct 13</td>
    <td rowspan="4">Isolation &<br>Memory<br>Safety</td>
    <td>(L) OS and VM Isolation</td>
    <td>
      <ul class="inline">
        <!-- <li><strong>Pre-lecture:</strong> An Introduction to CHERI</li> -->
        <li><strong>Post-lecture:</strong> Firecracker: Lightweight Virtualization for Serverless Applications</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Oct 15</td>
    <td>(L) Memory Safety</td>
    <td>
      <ul class="inline">
        <li><strong>Pre-lecture:</strong> An Introduction to CHERI</li>
        <li><strong>Post-lecture:</strong> No-FAT: Architectural Support for Low Overhead Memory Safety Checks</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-9">Week 9</td>
    <td class="date">Oct 20</td>
    <td>(L) Control-Flow Integrity</td>
    <td>
      <ul class="inline">
        <li><strong>Pre-lecture:</strong> <a href="https://www.intel.com/content/www/us/en/developer/articles/technical/technical-look-control-flow-enforcement-technology.html" target="_blank">A Technical Look at Intel Control-Flow Enforcement Technology</a></li>
        <li><strong>Post-lecture:</strong> SPECCFI: Mitigating Spectre Attacks using CFI Informed Speculation</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Oct 22</td>
    <td>(D) Transient Execution + Memory Safety</td>
    <td>
      <ul class="inline">
        <li><strong>Pre-lecture:</strong> Speculative Probing: Hacking Blind in the Spectre Era</li>
        <li><strong>Post-lecture:</strong> PACMAN: Attacking ARM Pointer Authentication with Speculative Execution</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-10">Week 10</td>
    <td class="date">Oct 27</td>
    <td>RowHammer</td>
    <td>(L) RowHammer</td>
    <td>
      <ul class="inline">
        <!-- <li><strong>Pre-lecture:</strong> Speculative Probing: Hacking Blind in the Spectre Era</li> -->
        <li><strong>Post-lecture:</strong> RowHammer: A Retrospective</li>
        <li><strong>Optional:</strong> <a href="https://www.youtube.com/watch?v=sgd7PHQQ1AI" target="_blank">The Story of Rowhammer</a> by Onur Mutlu</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Oct 29</td>
    <td rowspan="7">Inspiring<br>Papers/Ideas</td>
    <td>(D) Attacking AI Systems</td>
    <td>
      <strong>Papers to discuss (Choose one to review):</strong><br>
      <ul class="inline">
      <li>Remote Timing Attacks on Efficient Language Model Inference</li>
      <li>I Know What You Asked: Prompt Leakage via KV-Cache Sharing in Multi-Tenant LLM Serving</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-11">Week 11</td>
    <td class="date">Nov 3</td>
    <td>(D) Emerging TEE Designs</td>
    <td>
      <strong>Papers to discuss (Choose one to review):</strong><br>
      <ul class="inline">
      <li>Graviton: Trusted Execution Environments on GPUs</li>
      <li>Sequestered Encryption: A Hardware Technique for Comprehensive Data Privacy</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Nov 5</td>
    <td>(D) uArch Weird Machines</td>
    <td>
      <strong>Papers to discuss (Choose one to review):</strong><br>
      <ul class="inline">
      <li>Computing with Time: Microarchitectural Weird Machines</li>
      <li>The Gates of Time: Improving Cache Attacks with Transient Execution</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-12">Week 12</td>
    <td class="date">Nov 10</td>
    <td>(L/D) Information-Flow Tracking in Hardware</td>
    <td>
      <strong>Paper to discuss:</strong><br>
      <ul class="inline">
      <li>Complete Information Flow Tracking from the Gates Up</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Nov 12</td>
    <td>(D) Fun Side Channels</td>
    <td>
      <strong>Papers to discuss (Choose one to review):</strong><br>
      <ul class="inline">
      <li>Hertzbleed: Turning Power Side-Channel Attacks Into Remote Timing Attacks on x86</li>
      <li>GoFetch: Breaking Constant-Time Cryptographic Implementations Using Data Memory-Dependent Prefetchers</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-13">Week 13</td>
    <td class="date">Nov 17</td>
    <td>(L/D) Private Search</td>
    <td>
      <strong>Paper to discuss:</strong><br>
      <ul class="inline">
      <li>Compass: Encrypted Semantic Search with High Accuracy</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Nov 19</td>
    <td>(D) Fuzzing & Attack Automation</td>
    <td>
      <strong>Papers to discuss (Choose one to review):</strong><br>
      <ul class="inline">
      <li>SpecFuzz: Bringing Spectre-Type Vulnerabilities to the Surface</li>
      <li>Medusa: Microarchitectural Data Leakage via Automated Attack Synthesis</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" style="text-align: center" id="week-14">Week 14</td>
    <td colspan="4" class="break">Fall Break (Optional Reading: "Why We Sleep" by Matthew Walker)</td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-15">Week 15</td>
    <td class="date">Dec 1</td>
    <td>Summary</td>
    <td>Reflect and Chat*</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td class="date">Dec 3</td>
    <td rowspan="2" style="border-bottom: 0">Project</td>
    <td>Final Presentation (1)</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td class="week" id="week-16">W16</td>
    <td class="date">Dec 8</td>
    <td>Final Presentation (2)</td>
    <td>-</td>
    <td>-</td>
  </tr>
</tbody></table>
\* With free food!
