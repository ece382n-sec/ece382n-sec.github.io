{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  packages = with pkgs; [
    ruby_3_3
    bundler

    # Needed by some Ruby gems when native extensions are built locally.
    gcc
    gnumake
    pkg-config
    libffi
    zlib
  ];

  shellHook = ''
    export BUNDLE_PATH="$PWD/.bundle"
    export BUNDLE_BIN="$PWD/.bundle/bin"
    export PATH="$BUNDLE_BIN:$PATH"

    echo "Jekyll dev shell"
    echo "  1. bundle install"
    echo "  2. bundle exec jekyll serve --livereload"
  '';
}
