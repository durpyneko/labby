{
  description = "labby";
  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

  outputs =
    { self, nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs {
        inherit system;
      };
    in
    {
      devShells = {
        x86_64-linux.default = pkgs.mkShell rec {
          buildInputs = with pkgs; [
            bun
          ];

          shellHook = ''
            echo -e "\033[38;2;78;78;78m[\033[38;2;43;251;97m+\033[38;2;78;78;78m]\033[0m devshell init success."
            if command -v fish >/dev/null 2>&1; then
              exec fish
            fi
          '';
        };
      };
    };
}
