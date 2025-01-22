## About

NetIP relays information about your public IP address
from
[clean.myip.wtf/json](https://clean.myip.wtf/json)
to your browser. The primary development and runtime
dependencies are
[TypeScript](https://www.typescriptlang.org/),
[PreactJS](https://preactjs.com/),
and
[Deno](https://deno.com/). See the [Install](#install)
instructions for details on how to build and sideload the
extension on both Chromium and Firefox.

## Install

#### Build

* Produce the `build/` directory. <br>
  [Deno](https://deno.com/) should be installed, or the build
  won't work. <br> NodeJS is *not* required:

        $ git clone https://github.com/0x1eef/NetIP
        $ cd NetIP
        $ make build

#### Install (Chromium)

* Load the extension
    * Visit `chrome://extensions`
    * Check `Developer mode` (top right hand corner)
    * Click `Load unpacked extension`
    * Choose the `build/` directory from the file dialog
    * Done

#### Install (Firefox)

* Load the extension
  * Visit `about:addons`
  * Click the gear icon (top right hand corner)
  * Click "Debug Add-ons"
  * Click "Load Temporary Add-on"
  * Choose the `build/manifest.json` file from the file dialog
  * Done

## Sources

* [github.com/@0x1eef](https://github.com/0x1eef/NetIP#readme)
* [gitlab.com/@0x1eef](https://gitlab.com/0x1eef/NetIP#about)
* [bsd.cafe/@0x1eef](https://brew.bsd.cafe/0x1eef/NetIP#readme)
* [hardenedbsd.org/@0x1eef](https://git.hardenedbsd.org/0x1eef/NetIP#about)

## Credit

Credit to
[becris](https://www.flaticon.com/authors/becris)
who authored the following icons:

* src/images/icon16x16.png
* src/images/icon64x64.png
* src/images/icon256x256.png
* src/images/icon512x512.png

## License

[BSD Zero Clause](https://choosealicense.com/licenses/0bsd/)
<br>
See [LICENSE](./share/NetIP/LICENSE)
