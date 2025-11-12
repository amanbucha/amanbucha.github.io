export const siteConfig = {
  name: "Aman Bucha",
  title: "Software Engineer @ Nutanix",
  description:
    "Portfolio of Aman Bucha — Systems & Machine Learning engineer passionate about distributed systems, storage, and optimization.",
  accentColor: "#1d4ed8",
  social: {
    email: "arbitraryaman@gmail.com",
    linkedin: "https://linkedin.com/in/aman-bucha-b27590203",
    twitter: "https://x.com/aman_bucha",
    github: "https://github.com/amanbucha",
  },
  aboutMe:
    "I’m a systems and ML enthusiast who loves building cool stuff. I enjoy applying theory to make complex systems faster and more efficient.",
  skills: [ 
    "C/C++",
    "Python",
    "Go",
    "Docker",
    "Kubernetes",
    "ZFS",
    "PyTorch",
    "Azure",
  ],
  projects: [
    {
      name: "Neural Optimizer",
      description:
        "Built a framework to optimize PyTorch models through graph-IR transformations (Conv/Linear/BatchNorm fusion, constant folding, dead-code elimination, quantization passes). Achieved 3× faster inference, approaching TorchScript performance.",
      link: "https://github.com/amanbucha/Neural-Optimizer",
      skills: ["PyTorch", "Model Optimization"],
    },
    {
      name: "Distributed Training for ML Models",
      description:
        "Built a decentralized distributed training system using Docker, PyTorch, and gRPC — implementing Ring AllReduce for synchronized gradient aggregation across containers.",
      link: "https://github.com/amanbucha/Distributed-Training",
      skills: ["PyTorch", "Docker"],
    },
    {
      name: "eBPF-based Function Latency Profiler",
      description:
        "Developed a user-space latency profiler using eBPF uprobes to trace cache misses and analyze function-level performance using perf counters.",
      link: "https://github.com/amanbucha/Cache-Scope",
      skills: ["eBPF", "C",],
    },
    // {
    //   name: "Tiering System",
    //   description:
    //     "Developed a tiered storage system that automatically moves files between SSD and HDD based on access frequency using inotify and background worker threads.",
    //   link: "https://github.com/amanbucha/Tiering",
    //   skills: ["C++", "Linux", "Multithreading"],
    // },
    {
      name: "Version FUSE FileSystem",
      description:
        "Implemented a FUSE filesystem in Python that maintains lightweight diffs of files, enabling version control, restoration, and auto-pruning of history.",
      link: "https://github.com/amanbucha/Version-FileSystem",
      skills: ["Python", "FUSE"],
    },
    {
      name: "Last Mile Delivery Optimization",
      description:
        "Inter IIT Tech Meet project optimizing dynamic delivery routing using sweep clustering, bin packing heuristics, and image-based volume estimation.",
      link: "https://github.com/soul0101/InterIIT-Optimization",
      skills: ["Python", "Heuristics"],
    },
  ],
  experience: [
    {
      company: "Nutanix",
      title: "Member of Technical Staff",
      dateRange: "Aug 2024 – Present",
      bullets: [
        "Parallelized VM attachment tasks reducing distributed share creation from 3 mins → 45s and deletion from 2 mins → 30s.",
        "Optimized ZFS pool import, cutting import time from 8s → 2s and HA failover from 2 mins → 50s.",
        "Replaced iSCSI workflow with Nutanix Acropolis Hypervisor for storage communication.",
        "Implemented NFS-over-TLS tunneling for encrypted data transfer.",
      ],
    },
    {
      company: "Rubrik",
      title: "Software Development Intern",
      dateRange: "May 2023 – Aug 2023",
      bullets: [
        "Integrated Azure AD-based authentication replacing Storage Access Keys, improving cloud security posture.",
        "Built archival service to automate snapshot retrieval from customer cloud environments.",
      ],
    },
  ],
  education: [
    {
      school: "Indian Institute of Technology Guwahati",
      degree: "B.Tech. in Mathematics and Computing",
      dateRange: "Nov 2020 – Jun 2024",
      achievements: ["CPI: 8.66/10", "ICPC Asia West Finalist 2024", "Competitive Programming Head", "Web Developer @ Techniche (IIT Guwahati's Tech Fest)"],
    },
  ],
  blogs: [
    {
      title: "Wald's Equation",
      description: "Using Wald's Equation: $$\\mathbb{E}\\left[\\sum_{i=1}^{N} X_i\\right] = \\mathbb{E}[N]\\cdot\\mathbb{E}[X_1]$$ to solve complex problems.",
      link: "https://codeforces.com/blog/entry/148187", 
      platform: "CodeForces",
    },
    {
      title: "Unravelling the Vast Universe",
      description: "A philosophical take that the universe is a mathematical structure.",
      link: "https://matrix-iitguwahati.medium.com/unravelling-the-vast-universe-def0afeffcf0", 
      platform: "Medium",
    },
    // {
    //   title: "Understanding Ring AllReduce in Distributed Training",
    //   description: "Deep dive into how gradient aggregation works without a central parameter server.",
    //   link: "https://amanbucha.github.io/ring-allreduce",
    // },
  ],

  talks: [
    {
      title: "Number Theory and FFT",
      link: "https://www.youtube.com/watch?v=tQTpSfyTzbs",
      date: "Algomaniacs 2023",
    },
    {
      title: "Playing with Bits",
      link: "https://www.youtube.com/watch?v=3FgH7mRgVss",
      date: "Alogmaniacs 2024",
    },
  ],
};
