export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
export const paperUrl = "https://openreview.net/pdf?id=TMUEPGI01F";
export const codeUrl = "https://github.com/MetaIoT-WHU/RaVF";
export const bibtex = `@inproceedings{wang2026ravf,
    title={Ra{VF}: Learning Radar Velocity Fields via Spatial-Doppler Guidance},
    author={Shengpeng Wang, Lingzhen Li, Chunshen Li, Fei Xiao, and Wei Wang},
    booktitle={The Fortieth Annual Conference on Neural Information Processing Systems},
    year={2026}
}`;

export const authors = [
  {
    name: "Shengpeng Wang",
    affiliation: "1,*",
    url: "https://shengpeng.wang/",
  },
  {
    name: "Lingzhen Li",
    affiliation: "1,*",
    url: "mailto:lingzhenli@hust.edu.cn",
  },
  { name: "Chunshen Li", affiliation: "1", url: "mailto:leeechsh@hust.edu.cn" },
  { name: "Fei Xiao", affiliation: "2", url: "mailto:feixiao@hubu.edu.cn" },
  { name: "Wei Wang", affiliation: "3,†", url: "mailto:wangw@whu.edu.cn" },
];

export const institutions = [
  {
    id: "1",
    name: "Huazhong University of Science and Technology",
    short: "HUST",
    logo: "hust",
    url: "https://www.hust.edu.cn/",
  },
  {
    id: "2",
    name: "Hubei University",
    short: "Hubei University",
    logo: "hubu",
    url: "https://www.hubu.edu.cn/",
  },
  {
    id: "3",
    name: "Wuhan University",
    short: "Wuhan University",
    logo: "whu",
    url: "https://www.whu.edu.cn/",
  },
];

export const abstract = `Scene-level velocity field estimation from 4D millimeter-wave radar is critical for robust perception but remains challenged by the inherent sparsity and noise of point-based paradigms. Furthermore, Doppler ambiguity induced by the Nyquist sampling limit fundamentally disrupts the continuity of velocity field learning. To address these challenges, we propose RaVF, a physically grounded framework that directly learns velocity fields from high-fidelity spatial-Doppler spectra. RaVF is built upon three key designs tailored to radar-specific signal distortions: 1) To mitigate range-dependent propagation attenuation and nonlinear angular spatial quantization, we devise a Physically-aware Encoder that calibrates spectral feature extraction within the native radar beamforming. 2) Observing that ego-induced radial motion explains static Doppler responses, we factor out static motion and guide dynamic flow estimation for physically consistent velocity field learning. 3) To enhance kinematic plausibility, we introduce an ego-conditioned bidirectional pyramidal flow module that transfers backward flow into the forward frame and enforces anti-symmetric forward-backward consistency. Extensive experiments demonstrate that RaVF significantly outperforms state-of-the-art baselines on velocity fields.`;
