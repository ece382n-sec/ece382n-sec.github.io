---
title: Course Schedule
layout: minimal
---

# Course Schedule and Materials
<p class="year-tag">Fall 2025</p>
<hr>

## Schedule and Reading List

<style type="text/css">
th, td {
  min-width: 2rem !important;
  text-align: center;
  border-color:rgb(200, 200, 200) !important;
}

th {
  background-color:#bf5700;
  color:#fdf6e3;
}

.week {
  writing-mode: sideways-lr;
  padding: 0.25rem;
}

.date {
  border-left: 1px solid rgb(200, 200, 200) !important;
  min-width: 5rem !important;
}

.break {
  background-color:rgba(191, 86, 0, 0.15);
}
</style>

<div style="height: 0.8rem"></div>

<table><thead>
  <tr>
    <th></th>
    <th>Date</th>
    <th>Theme</th>
    <th>Topic</th>
    <th>Pre-lecture Reading</th>
    <th>Post-lecture Reading</th>
  </tr></thead>
<tbody>
  <tr>
    <td rowspan="2" class="week">Week 1</td>
    <td class="date">Aug 25</td>
    <td rowspan="2">Bootstrap</td>
    <td>Course Overview</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td class="date">Aug 27</td>
    <td>Course Speed-run and Project Ideas </td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td rowspan="2" class="week">Week 2</td>
    <td>Sep 1</td>
    <td colspan="4" class="break">Labor Day</td>
  </tr>
  <tr>
    <td class="date">Sep 3</td>
    <td rowspan="4">uArch<br>Side<br>Channels</td>
    <td>Cache-Based Side Channels</td>
    <td>Flush+Reload</td>
    <td>Theory and Practice of Finding Eviction Sets</td>
  </tr>
  <tr>
    <td rowspan="2" class="week">Week 3</td>
    <td class="date">Sep 8</td>
    <td>Side Channels in Public Clouds</td>
    <td>Get Off of My Cloud</td>
    <td>Everywhere All at Once</td>
  </tr>
  <tr>
    <td class="date">Sep 10</td>
    <td>Partitioning and Randomization</td>
    <td>Catalyst</td>
    <td>MIRAGE</td>
  </tr>
  <tr>
    <td rowspan="2" class="week">Week 4</td>
    <td class="date">Sep 15</td>
    <td>Data-Oblivious Computation</td>
    <td>OISA</td>
    <td>PathORAM</td>
  </tr>
  <tr>
    <td class="date">Sep 17</td>
    <td rowspan="4">Speculation</td>
    <td>Spectre and Meltdown</td>
    <td>Spectre Attacks</td>
    <td>A Systematic Evaluation of Transient Execution Attacks and Defenses</td>
  </tr>
  <tr>
    <td rowspan="2" class="week">Week 5</td>
    <td class="date">Sep 22</td>
    <td>Advanced Spectre Attacks</td>
    <td></td>
    <td>Speculative Type Confusion</td>
  </tr>
  <tr>
    <td class="date">Sep 24</td>
    <td>Software and Hardware Defenses</td>
    <td>Speculative Load Hardening</td>
    <td>Speculative Taint Tracking</td>
  </tr>
  <tr>
    <td rowspan="2" class="week">Week 6</td>
    <td class="date">Sep 29</td>
    <td>Speculative Interference</td>
    <td>Delay-on-Miss</td>
    <td>GhostMinion</td>
  </tr>
  <tr>
    <td class="date">Oct 1</td>
    <td rowspan="3">Sandboxing</td>
    <td>Virtualization</td>
    <td></td>
    <td>Firecracker: Lightweight Virtualization for Serverless Applications</td>
  </tr>
  <tr>
    <td rowspan="2" class="week">Week 7</td>
    <td class="date">Oct 6</td>
    <td>Container</td>
    <td></td>
    <td>Blending Containers and Virtual Machines: A Study of Firecracker and gVisor</td>
  </tr>
  <tr>
    <td class="date">Oct 8</td>
    <td>Web Assembly (WASM)</td>
    <td></td>
    <td>Bringing the Web up to Speed with WebAssembly</td>
  </tr>
  <tr>
    <td rowspan="2" class="week">Week 8</td>
    <td class="date">Oct 13</td>
    <td rowspan="4">Trusted<br>Execution<br>Environments<br>(TEEs)</td>
    <td>Overview and Background</td>
    <td>SGX Explained (Ch. 2)</td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Oct 15</td>
    <td>Attestation and Memory Encryption</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2" class="week">Week 9</td>
    <td class="date">Oct 20</td>
    <td>Commercial TEEs</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Oct 22</td>
    <td>Attacks on TEEs</td>
    <td>Controlled Channel</td>
    <td>MicroScope</td>
  </tr>
  <tr>
    <td rowspan="2" class="week">Week 10</td>
    <td class="date">Oct 27</td>
    <td>Project</td>
    <td>Midpoint Lightning Talks</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td class="date">Oct 29</td>
    <td rowspan="3">Memory<br>Safety</td>
    <td>Overview</td>
    <td>The geometry of innocent flesh on the bone</td>
    <td>Eternal War on Memory</td>
  </tr>
  <tr>
    <td rowspan="2" class="week">Week 11</td>
    <td class="date">Nov 3</td>
    <td>Hardware Support for Memory Safety</td>
    <td>ARM CHERI</td>
    <td>HFI</td>
  </tr>
  <tr>
    <td class="date">Nov 5</td>
    <td>Control-Flow Integrity</td>
    <td>Intel IBT</td>
    <td>SpecCFI</td>
  </tr>
  <tr>
    <td rowspan="2" class="week" id="week-12">Week 12</td>
    <td class="date">Nov 10</td>
    <td rowspan="4">Potpourri<br>(Other<br>Interesting<br>Papers)</td>
    <td>Hertzbleed</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Nov 12</td>
    <td>Website Fingerprinting</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2" class="week">Week 13</td>
    <td class="date">Nov 17</td>
    <td>GPU TEEs</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="date">Nov 19</td>
    <td>uArch Weird Machine</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Week 14</td>
    <td colspan="4" class="break">Fall Break (Optional Reading: "Why We Sleep" by Matthew Walker)</td>
  </tr>
  <tr>
    <td rowspan="2" class="week">Week 15</td>
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
    <td class="week">W16</td>
    <td class="date">Dec 8</td>
    <td>Final Presentation (2)</td>
    <td>-</td>
    <td>-</td>
  </tr>
</tbody></table>
\* With free food!