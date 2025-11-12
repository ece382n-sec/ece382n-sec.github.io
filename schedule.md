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
    <td><a href="files/L2 - Side Channels in Public Cloud.pdf">Slides</a></td>
  </tr>
  <tr>
    <td class="date">Sep 10</td>
    <td>(L) Partitioning, Randomization, and Detection</td>
    <td>
      <ul class="inline">
        <li><strong>Pre-lecture:</strong>
        <a href="https://class.ece.iastate.edu/tyagi/cpre581/papers/HPCA16Catalyst.pdf" target="_blank">
        CATalyst: Defeating Last-Level Cache Side Channel Attacks in Cloud Computing (HPCA '16, Sections 1-3)</a></li>
        <li><strong>No post-lecture reading, please focus on your term project proposal</strong></li>
        <li>(Optional) <a href="https://docs.google.com/presentation/d/1TezFuMWDTNXdEq-o2tuAN62myVBqD7To/edit?usp=sharing&ouid=109395281671520631390&rtpof=true&sd=true" target="_blank">
        A Game of Cache Attacks and Defense</a>
        by Moinuddin Qureshi at
        <a href="https://sites.google.com/view/mad-isca22" target="_blank">MAD tutorial (ISCA '22)
        </a></li>
      </ul>
    </td>
    <td><a href="files/L3 - Partitioning, Randomization, and Detection.pdf">Slides</a></td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-4">Week 4</td>
    <td class="date">Sep 15</td>
    <td>(L) Data-Oblivious Computation</td>
    <td>
      <ul class="inline">
        <li><strong>Pre-lecture:</strong>
        <a href="https://www.intel.com/content/www/us/en/developer/articles/technical/software-security-guidance/secure-coding/mitigate-timing-side-channel-crypto-implementation.html" target="_blank">Guidelines for Mitigating Timing Side Channels Against Cryptographic Implementations</a> by Intel</li>
        <li><strong>(Optional) Other Resources:</strong>
        <ul class="inline">
        <li><a href="https://elaineshi.com/docs/oramlecture.pdf" target="_blank">Oblivious RAM</a> by Elaine Shi</li>
        <li><a href="https://github.com/veorq/cryptocoding" target="_blank">Cryptocoding (a list of "coding rules")
        for implementing cryptographic operations</a> by
        Jean-Philippe Aumasson</li>
        </ul>
        </li>
      </ul>
    </td>
    <td><a href="files/L4 - Data-Oblivious Computation.pdf">Slides</a><br>
      <a href="https://github.com/ece382n-sec/Example-PoCs/tree/main/Strcmp" target="_blank">PoC</a></td>
  </tr>
  <tr>
    <td class="date">Sep 17</td>
    <td rowspan="3">Speculation</td>
    <td>(L) Transient-Execution Attacks (w/ Demo!)</td>
    <td>
      <ul class="inline">
        <li><strong>Pre-lecture:</strong>
        <a href="https://www.youtube.com/watch?v=zOvBHxMjNls" target="_blank">
        Conference presentation of Spectre Attacks</a>
        </li>
        <li><strong>(Optional) Other Resources:</strong>
        <ul class="inline">
        <li><a href="https://spectreattack.com/spectre.pdf" target="_blank">Spectre Attacks: Exploiting Speculative Execution</a></li>
        <li><a href="https://meltdownattack.com/meltdown.pdf" target="_blank">Meltdown: Reading Kernel Memory from User Space</a></li>
        <li><a href="https://www.usenix.org/conference/usenixsecurity19/presentation/canella" target="_blank">A Systematic Evaluation of Transient Execution Attacks and Defenses</a></li>
        </ul>
        </li>
      </ul>
    </td>
    <td><a href="files/L5 - Spectre and Meltdown.pdf">Slides</a><br>
      <a href="https://github.com/ece382n-sec/Example-PoCs/tree/main/Spectre" target="_blank">PoC</a></td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-5">Week 5</td>
    <td class="date">Sep 22</td>
    <td>(D) Advanced Spectre Attacks</td>
    <td>
    <ul class="inline">
      <li><strong>Papers to discuss (Choose one to review):</strong><br>
      <ul class="inline">
        <li><a href="https://www.usenix.org/conference/usenixsecurity21/presentation/kirzner" target="_blank">
        An Analysis of Speculative Type Confusion Vulnerabilities in the Wild (USENIX Sec '21)</a></li>
        <li><a href="https://www.usenix.org/conference/usenixsecurity22/presentation/barberis" target="_blank">Branch History Injection: On the Effectiveness of Hardware Mitigations Against Cross-Privilege Spectre-v2 Attacks (USENIX Sec '22)</a></li>
      </ul></li>
      <li><strong>(Optional) Other Resources:</strong>
        <ul class="inline">
        <li><a href="https://support.google.com/faqs/answer/7625886" target="_blank">Retpoline: a software construct for preventing branch-target-injection</a></li>
        <li><a href="https://www.usenix.org/conference/usenixsecurity22/presentation/wikner" target="_blank">RETBLEED: Arbitrary Speculative Code Execution with Return Instructions</a></li>
        <li>
        The AMD Branch (Mis)predictor: Just Set it and Forget it!
        (<a href="https://grsecurity.net/amd_branch_mispredictor_just_set_it_and_forget_it" target="_blank">Part 1</a>,
        <a href="https://grsecurity.net/amd_branch_mispredictor_part_2_where_no_cpu_has_gone_before" target="_blank">Part 2</a>)</li>
        </ul></li>
    </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Sep 24</td>
    <td>(D) Hardware Defenses</td>
    <td>
      <ul class="inline">
      <li>
      <strong>Papers to discuss (Choose one to review):</strong><br>
      <ul class="inline">
        <li><a href="https://dl.acm.org/doi/10.1145/3307650.3322216" target="_blank">
        Efficient Invisible Speculative Execution through Selective Delay and Value Prediction (ISCA '19)</a></li>
        <li><a href="https://dl.acm.org/doi/10.1145/3352460.3358274" target="_blank">
        Speculative Taint Tracking (STT): A Comprehensive Protection for Speculatively Accessed Data (MICRO '19)</a></li>
      </ul>
      </li>
      <li><strong>(Optional) Other Resources:</strong>
        <ul class="inline">
        <li><a href="https://dl.acm.org/doi/10.1145/3445814.3446708" target="_blank">Speculative interference attacks: breaking invisible speculation schemes</a></li>
        <li><a href="https://ieeexplore.ieee.org/document/9138997" target="_blank">Speculative Data-Oblivious Execution: Mobilizing Safe Prediction For Safe and Efficient Speculative Execution</a></li>
        </ul></li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-6">Week 6</td>
    <td class="date">Sep 29</td>
    <td rowspan="4">Trusted<br>Execution<br>Environments<br>(TEEs)</td>
    <td>(L) TEE Overview and Attestation</td>
    <td>
      <ul class="inline">
        <!-- <li><strong>Pre-lecture:</strong> Trusted Execution Environments: Properties, Applications, and Challenges</li> -->
        <li><strong>(Optional) Other Resources:</strong>
        <a href="https://eprint.iacr.org/2016/086.pdf" target="_blank">Intel SGX Explained</a></li>
      </ul>
    </td>
    <td>
    <a href="files/L6 - TEE Overview and Attestation.pdf">Slides</a>
    </td>
  </tr>
  <tr>
    <td class="date">Oct 1</td>
    <td>(L) Memory Encryption and Integrity Protection</td>
    <td>
      <ul class="inline">
        <!-- <li><strong>Pre-lecture:</strong> Efficient Memory Integrity Verification and Encryption for Secure Processors</li> -->
        <li><strong>(Optional) Other Resources:</strong>
        <ul class="inline">
        <li><a href="https://microarch.org/micro36/html/pdf/suh-EfficMemory.pdf" target="_blank">
        Efficient Memory Integrity Verification and Encryption for Secure Processors
        </a></li>
        <li><a href="https://faculty.cc.gatech.edu/~milos/rogers_micro07.pdf" target="_blank">
        Using Address Independent Seed Encryption and Bonsai Merkle Trees to Make Secure Processors OS- and Performance-Friendly
        </a></li>
        </ul>
        </li>
      </ul>
    </td>
    <td>
    <a href="files/L7 - Memory Encryption and Integrity Protection.pdf">Slides</a>
    </td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-7">Week 7</td>
    <td class="date">Oct 6</td>
    <td>(L) TEE Designs</td>
    <td>
      <ul class="inline">
        <li><strong>Pre-lecture:</strong>
        <a href="https://www.youtube.com/watch?v=lQu95We1Lmc" target="_blank">
        (Presentation) Keystone: An Open Framework for Architecting Trusted Execution Environments</a></li>
      </ul>
    </td>
    <td><a href="files/L8 - TEE Designs.pdf">Slides</a></td>
  </tr>
  <tr>
    <td class="date">Oct 8</td>
    <td>(D) Attacks on TEEs</td>
    <td>
      <strong>Papers to discuss (Choose one to review):</strong><br>
      <ul class="inline">
        <li><a href="https://www.ieee-security.org/TC/SP2015/papers-archived/6949a640.pdf" target="_blank">
        Controlled-Channel Attacks: Deterministic Side Channels for Untrusted Operating Systems (SP '15)</a></li>
        <li><a href="https://www.cs.cmu.edu/~dskarlat/publications/microScope_isca19.pdf" target="_blank">
        MicroScope: Enabling Microarchitectural Replay Attacks (ISCA '19)</a></li>
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
        <li><strong>(Optional) Other Resources:</strong></li>
        <ul class="inline">
        <li><a href="https://www.vmware.com/docs/perf_esx_intel-ept-eval" target="_blank">Performance Evaluation of Intel EPT Hardware Assist</a></li>
        <li><a href="https://web.stanford.edu/class/cs240/readings/hwsw.pdf" target="_blank">A Comparison of Software and Hardware Techniques for x86 Virtualization</a></li>
        <li><a href="https://dl.acm.org/doi/10.1145/3132747.3132763" target="_blank">My VM is Lighter (and Safer) than your Container</a></li>
        <li><a href="https://www.usenix.org/system/files/nsdi20-paper-agache.pdf" target="_blank">Firecracker: Lightweight Virtualization for Serverless Applications</a></li>
        <li><a href="https://pages.cs.wisc.edu/~swift/papers/vee20-isolation.pdf" target="_blank">Blending Containers and Virtual Machines: A Study of Firecracker and gVisor</a></li>
        </ul>
      </ul>
    </td>
    <td>
    <a href="files/L9 - OS and VM Isolation.pdf">Slides</a>
    </td>
  </tr>
  <tr>
    <td class="date">Oct 15</td>
    <td>(L) Memory Safety</td>
    <td>
      <ul class="inline">
        <li><strong>Pre-lecture:</strong>
        <a href="https://www.youtube.com/watch?v=1S0aBV-Waeo" target="_blank">Running a Buffer Overflow Attack - Computerphile</a></li>
        <li><strong>(Optional) Other Resources:</strong></li>
        <ul class="inline">
        <li><a href="https://people.eecs.berkeley.edu/~dawnsong/papers/Oakland13-SoK-CR.pdf" target="_blank">SoK: Eternal War in Memory</a></li>
        <li><a href="https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-941.pdf" target="_blank">An Introduction to CHERI</a></li>
        <li><a href="https://www.cs.columbia.edu/~mtarek/files/preprint_ISCA21_NoFAT.pdf" target="_blank">No-FAT: Architectural Support for Low Overhead Memory Safety Checks</a></li>
        <li><a href="https://www.cs.ucr.edu/~csong/oakland20-speccfi.pdf" target="_blank">SPECCFI: Mitigating Spectre Attacks using CFI Informed Speculation</a></li>
      </ul>
      </ul>
    </td>
    <td><a href="files/L10 - Memory Safety.pdf">Slides</a></td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-9">Week 9</td>
    <td class="date">Oct 20</td>
    <td>(D) In-Process Isolation</td>
    <td>
      <strong>Papers to discuss (Choose one to review):</strong><br>
      <ul class="inline">
        <li><a href="https://www.usenix.org/system/files/sec20-schrammel.pdf" target="_blank">
        Donky: Domain Keys--Efficient In-Process Isolation for RISC-V and x86 (USENIX '20)</a></li>
        <li><a href="https://dl.acm.org/doi/10.1145/3582016.3582023" target="_blank">
        Going beyond the Limits of SFI: Flexible and Secure Hardware-Assisted In-Process Isolation with HFI (ASPLOS '23)</a></li>
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
        <li><a href="https://download.vusec.net/papers/blindside_ccs20.pdf" target="_blank">
        Speculative Probing: Hacking Blind in the Spectre Era (CCS '20)</a></li>
        <li><a href="https://pacmanattack.com/paper.pdf" target="_blank">
        PACMAN: Attacking ARM Pointer Authentication with Speculative Execution (ISCA '22)</a></li>
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
        <li><strong>(Optional) Other Resources:</strong></li>
        <ul class="inline">
        <li><a href="https://www.youtube.com/watch?v=sgd7PHQQ1AI" target="_blank">The Story of Rowhammer</a></li>
        <li><a href="https://users.ece.cmu.edu/~yoonguk/papers/kim-isca14.pdf" target="_blank">Flipping Bits in Memory Without Accessing Them: An Experimental Study of DRAM Disturbance Errors</a></li>
        <li><a href="https://microarch.org/micro53/papers/738300a001.pdf" target="_blank">Graphene: Strong yet Lightweight RowHammer Protection</a></li>
        <li><a href="https://ieeexplore.ieee.org/document/9833664/" target="_blank">ProTRR: Principled yet Optimal In-DRAM Target Row Refresh</a></li>
        </ul>
      </ul>
    </td>
    <td><a href="files/L11 - RowHammer.pdf">Slides</a></td>
  </tr>
  <tr>
    <td class="date">Oct 29</td>
    <td rowspan="7">Inspiring<br>Papers/Ideas</td>
    <td>(D) Attacking AI Systems</td>
    <td>
      <strong>Papers to discuss (Choose one to review):</strong><br>
      <ul class="inline">
      <li><a href="https://arxiv.org/abs/2508.15036" target="_blank">
      MoEcho: Exploiting Side-Channel Attacks to Compromise User Privacy in Mixture-of-Experts LLMs (CCS '25)</a></li>
      <li><a href="https://www.ndss-symposium.org/ndss-paper/i-know-what-you-asked-prompt-leakage-via-kv-cache-sharing-in-multi-tenant-llm-serving/" target="_blank">
      I Know What You Asked: Prompt Leakage via KV-Cache Sharing in Multi-Tenant LLM Serving (NDSS '25)</a></li>
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
      <li><a href="https://www.usenix.org/conference/osdi18/presentation/volos" target="_blank">Graviton: Trusted Execution Environments on GPUs (OSDI '18)</a></li>
      <li><a href="https://ieeexplore.ieee.org/document/9935044" target="_blank">Sequestered Encryption: A Hardware Technique for Comprehensive Data Privacy (SEED '22)</a></li>
      </ul>
      <strong>(Optional) Other resources:</strong>
      <ul class="inline">
      <li><a href="https://cacm.acm.org/practice/creating-the-first-confidential-gpus/" target="_blank">Creating the First Confidential GPUs</a></li>
      <li><a href="https://dl.acm.org/doi/10.1145/3576915.3616643" target="_blank">Security Verification of Low-Trust Architectures (CCS '23)</a></li>
      <li><a href="https://patentimages.storage.googleapis.com/f1/da/9f/89cc38c496264c/US12105855.pdf" target="_blank">Privacy-enhanced computation via sequestered encryption (US Patent)</a></li>
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
      <li><a href="https://dl.acm.org/doi/10.1145/3445814.3446729" target="_blank">Computing with Time: Microarchitectural Weird Machines (ASPLOS '21)</a></li>
      <li><a href="https://www.usenix.org/conference/usenixsecurity23/presentation/katzman" target="_blank">The Gates of Time: Improving Cache Attacks with Transient Execution (USENIX Sec '23)</a></li>
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
      <li><a href="https://dl.acm.org/doi/10.1145/1508244.1508258" target="_blank">Complete Information Flow Tracking from the Gates Up (ASPLOS '09)</a></li>
      <li><a href="https://cwfletcher.github.io/content/research/2021.micro.spt.paper.pdf" target="_blank">Speculative Privacy Tracking (SPT): Leaking Information From Speculative Execution Without Compromising Privacy (MICRO '21)</a></li>
      </ul>
    </td>
    <td>
    <a href="files/L12 - Information-Flow Tracking in Hardware.pdf">Slides</a>
    </td>
  </tr>
  <tr>
    <td class="date">Nov 12</td>
    <td>(D) Fun Side Channels</td>
    <td>
      <strong>Papers to discuss (Choose one to review):</strong><br>
      <ul class="inline">
      <li><a href="https://www.usenix.org/conference/usenixsecurity22/presentation/wang-yingchen" target="_blank">Hertzbleed: Turning Power Side-Channel Attacks Into Remote Timing Attacks on x86 (USENIX Sec '22)</a></li>
      <li><a href="https://dl.acm.org/doi/10.1145/3620665.3640355" target="_blank">Pentimento: Data Remanence in Cloud FPGAs (ASPLOS '24)</a></li>
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
        <li><a href="https://www.usenix.org/conference/usenixsecurity25/presentation/horvath" target="_blank">BarraCUDA: Edge GPUs do Leak DNN Weights (USENIX Sec '25)</a></li>
        <li><a href="https://www.computer.org/csdl/proceedings-article/sp/2024/313000a084/1RjEaSnpO3m" target="_blank">GPU.zip: On the Side-Channel Implications of Hardware-Based Graphical Data Compression (SP '24)</a></li>
      <strong>(Optional) Other Resources</strong>
      <ul class="inline">
        <li><a href="https://www.hertzbleed.com/2h2b.pdf">DVFS Frequently Leaks Secrets: Hertzbleed Attacks Beyond SIKE, Cryptography, and CPU-Only Data</a></li>
        <li><a href="https://www.usenix.org/system/files/usenixsecurity23-taneja.pdf">Hot Pixels: Frequency, Power, and Temperature Attacks on GPUs and Arm SoCs</a></li>
        <li><a href="https://timing.attacks.cr.yp.to/overclocking.html">Advice from DJB</a></li>
      </ul>
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
        <li><a href="https://www.usenix.org/conference/usenixsecurity20/presentation/oleksenko" target="_blank">SpecFuzz: Bringing Spectre-Type Vulnerabilities to the Surface (USENIX Sec '20)</a></li>
        <li><a href="https://www.usenix.org/conference/usenixsecurity24/presentation/solt" target="_blank">Cascade: CPU Fuzzing via Intricate Program Generation (USENIX Sec '24)</a></li>
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
