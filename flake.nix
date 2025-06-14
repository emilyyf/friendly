{
  description = "Flake for developing friendly";

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-25.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      nixpkgs,
      flake-utils,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShell = pkgs.mkShell {

          packages = with pkgs; [
            nodejs
            bun
            nushell
          ];

          shellHook = ''
            exec nu
          '';
        };
      }
    );
}
