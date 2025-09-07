---
title: Course Schedule, Reading List, and Slides
layout: minimal
---

# Course Schedule, Reading List, and Slides
<p class="year-tag">Fall 2025</p>
<hr>

## Course Schedule (Tentative)

**Please find the paper-discussion sign-up sheet on Canvas, under the "Home" tab**

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
        <li><strong>Pre-lecture:</strong>
          <a href="https://www.usenix.org/conference/usenixsecurity14/technical-sessions/presentation/yarom" target="_blank">
          Flush+Reload: A High Resolution, Low Noise, L3 Cache Side-Channel Attack (USENIX Sec '14, Sections 1-3)
          </a>
        </li>
        <li><strong>Post-lecture (Choose one to review):</strong>
          <ul class="inline">
            <li><a href="https://yuval.yarom.org/pdfs/LiuYGHL15.pdf" target="_blank">
            Last-Level Cache Side-Channel Attacks are Practical (SP '15)</a></li>
            <li><a href="https://www.computer.org/csdl/proceedings-article/sp/2019/666000a039/1dlwkwPrlCw" target="_blank">
            Theory and Practice of Finding Eviction Sets (SP '19)</a></li>
          </ul>
        </li>
      </ul>
    </td>
    <td>
      <a href="files/L1 - Cache Side Channels.pdf">Slides</a><br>
      <a href="https://github.com/ece382n-sec/Example-PoCs" target="_blank">PoC</a>
    </td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-3">Week 3</td>
    <td class="date">Sep 8</td>
    <td>(L) Side Channels in Public Clouds (w/ Demo!)</td>
    <td>
      <ul class="inline">
        <li><strong>Pre-lecture:</strong>
        <a href="https://rist.tech.cornell.edu/papers/cloudsec.pdf" target="_blank">
        Hey, You, Get Off of My Cloud: Exploring Information Leakage in Third-Party Compute Clouds (CCS '09, Sections 1-3, 6)</a></li>
        <li><strong>Post-lecture:</strong>
        <a href="https://zzrcxb.me/files/papers/ASPLOS24-Everywhere.pdf" target="_blank">
        Everywhere All at Once: Co-Location Attacks on Public Cloud FaaS (ASPLOS '24)</a></li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Sep 10</td>
    <td>(L) Detection, Partitioning and Randomization</td>
    <td>
      <ul class="inline">
        <li><strong>Pre-lecture:</strong>
        <a href="https://class.ece.iastate.edu/tyagi/cpre581/papers/HPCA16Catalyst.pdf" target="_blank">
        CATalyst: Defeating Last-Level Cache Side Channel Attacks in Cloud Computing (HPCA '16)</a></li>
        <li><strong>No post-lecture reading, please focus on your term project proposal</strong></li>
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
        <li><strong>Post-lecture:</strong> Data Oblivious ISA Extensions for Side Channel-Resistant and High Performance Computing (NDSS '19)</li>
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
        <li><strong>No post-lecture reading</strong></li>
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
        <li><a href="https://www.usenix.org/conference/usenixsecurity21/presentation/kirzner" target="_blank">
        An Analysis of Speculative Type Confusion Vulnerabilities in the Wild (USENIX Sec '21)</a></li>
        <li><a href="https://www.usenix.org/conference/usenixsecurity22/presentation/barberis" target="_blank">Branch History Injection: On the Effectiveness of Hardware Mitigations Against Cross-Privilege Spectre-v2 Attacks (USENIX Sec '22)</a></li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Sep 24</td>
    <td>(D) Hardware Defenses</td>
    <td>
      <strong>Papers to discuss (Choose one to review):</strong><br>
      <ul class="inline">
        <li><a href="https://dl.acm.org/doi/10.1145/3307650.3322216" target="_blank">
        Efficient Invisible Speculative Execution through Selective Delay and Value Prediction (ISCA '19)</a></li>
        <li><a href="https://dl.acm.org/doi/10.1145/3352460.3358274" target="_blank">
        Speculative Taint Tracking (STT): A Comprehensive Protection for Speculatively Accessed Data (MICRO '19)</a></li>
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
        <li><strong>Pre-lecture:</strong> Keystone: An Open Framework for Architecting Trusted Execution Environments</li>
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
    <td>(L) Memory Safety & Control-Flow Integrity</td>
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
    <td>(D) In-Process Isolation</td>
    <td>
      <strong>Papers to discuss (Choose one to review):</strong><br>
      <ul class="inline">
        <li>Donky: Domain Keys--Efficient In-Process Isolation for RISC-V and x86</li>
        <li>Going beyond the Limits of SFI: Flexible and Secure Hardware-Assisted In-Process Isolation with HFI</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Oct 22</td>
    <td>(D) Transient Execution + Memory Safety</td>
    <td>
      <strong>Papers to discuss (Choose one to review):</strong><br>
      <ul class="inline">
        <li>Speculative Probing: Hacking Blind in the Spectre Era</li>
        <li>PACMAN: Attacking ARM Pointer Authentication with Speculative Execution</li>
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
        <li><strong>Pre-lecture:</strong> RowHammer: A Retrospective</li>
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
      <li><a href="https://arxiv.org/abs/2508.15036" target="_blank">
      MoEcho: Exploiting Side-Channel Attacks to Compromise User Privacy in Mixture-of-Experts LLMs</a></li>
      <li><a href="https://www.ndss-symposium.org/ndss-paper/i-know-what-you-asked-prompt-leakage-via-kv-cache-sharing-in-multi-tenant-llm-serving/" target="_blank">
      I Know What You Asked: Prompt Leakage via KV-Cache Sharing in Multi-Tenant LLM Serving</a></li>
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
    <td>(L) Information-Flow Tracking in Hardware</td>
    <td>
      <strong>Paper to discuss (Choose one to review):</strong><br>
      <ul class="inline">
      <li>Complete Information Flow Tracking from the Gates Up</li>
      <li>Speculative Privacy Tracking (SPT): Leaking Information From Speculative Execution Without Compromising Privacy</li>
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
      <li>Pentimento: Data Remanence in Cloud FPGAs</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-13">Week 13</td>
    <td class="date">Nov 17</td>
    <td>(D) Attacks on GPU</td>
    <td>
      <strong>Paper to discuss:</strong><br>
      <ul class="inline">
        <li>BarraCUDA: Edge GPUs do Leak DNN Weights</li>
        <li>GPU.zip: On the Side-Channel Implications of Hardware-Based Graphical Data Compression</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Nov 19</td>
    <td>(D) SW & HW Fuzzing</td>
    <td>
      <strong>Papers to discuss (Choose one to review):</strong><br>
      <ul class="inline">
        <li>SpecFuzz: Bringing Spectre-Type Vulnerabilities to the Surface</li>
        <li>Cascade: CPU Fuzzing via Intricate Program Generation</li>
      </ul>
      <strong>(Optional) Videos on hardware fuzzing:</strong>
      <ul class="inline">
        <li><a href="https://www.youtube.com/watch?v=neWc0H1k2Lc" target="_blank">The Discovery of Zenbleed ft. Tavis Ormandy</a> by LiveOverflow</li>
        <li><a href="https://www.youtube.com/watch?v=KrksBdWcZgQ" target="_blank">Breaking the x86 Instruction Set</a> by Christopher Domas at BlackHat '17</li>
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
