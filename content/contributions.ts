export const contributions = [
  {
    organization: "Meta",
    repository: "facebook/lexical",
    title: "Consolidated duplicated ancestor lookup logic",
    detail:
      "Refactored a shared, typed utility into core to remove duplicate implementations and package-layering violations without changing runtime behavior.",
    type: "Core refactor",
    href: "https://github.com/facebook/lexical/pull/7814",
  },
  {
    organization: "NVIDIA",
    repository: "NVIDIA/cuCollections",
    title: "Added a heterogeneous lookup example",
    detail:
      "Created and registered a CUDA example showing compatible probe-key hashing and comparison for static_map contains and find queries.",
    type: "Developer education",
    href: "https://github.com/NVIDIA/cuCollections/pull/762",
  },
  {
    organization: "Microsoft",
    repository: "microsoft/msquic",
    title: "Protected Rust publishing with a CI size gate",
    detail:
      "Added packaging validation that catches crates exceeding the registry limit before a release reaches crates.io.",
    type: "CI / release safety",
    href: "https://github.com/microsoft/msquic/pull/5443",
  },
  {
    organization: "Microsoft",
    repository: "microsoft/vscode-mypy",
    title: "Restored diagnostics in non-interactive mode",
    detail:
      "Combined stderr and stdout during parsing so mypy type errors are no longer silently dropped in affected configurations.",
    type: "Bug fix",
    href: "https://github.com/microsoft/vscode-mypy/pull/375",
  },
  {
    organization: "Google",
    repository: "google/ml-compiler-opt",
    title: "Clarified TensorFlow policy-saver usage",
    detail:
      "Aliased the upstream policy-saver module and updated usage and type hints to distinguish it from the project wrapper.",
    type: "Maintainability",
    href: "https://github.com/google/ml-compiler-opt/pull/528",
  },
  {
    organization: "Firebase",
    repository: "firebase/flutterfire",
    title: "Corrected Android OAuth client documentation",
    detail:
      "Fixed a platform-labeling error so FirebaseOptions documentation accurately identifies androidClientId as Android-only.",
    type: "Documentation",
    href: "https://github.com/firebase/flutterfire/pull/17720",
  },
];
