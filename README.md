## About

NetIP relays information about your public IP address
from
[clean.myip.wtf/json](https://clean.myip.wtf/json)
to your browser. The primary development and runtime
dependencies are
[TypeScript](https://www.typescriptlang.org/),
[preact](https://preactjs.com/),
and
[webpack](https://webpack.js.org/).
The extension can be built locally and installed as a
developer extension / addon on both Chromium and FireFox.
FireFox users can install the extension as an addon
via the [mozilla store](https://addons.mozilla.org/en-US/firefox/addon/97c865f874d543128d35/).

## Install

**Chromium|Chrome**

* Produce the `build/` directory

        $ git clone https://github.com/0x1eef/NetIP
        $ cd NetIP
        $ npm i
        $ npm run build:production

* Load the extension
    * Visit `chrome://extensions`
    * Check `Developer mode` (top right hand corner)
    * Click `Load unpacked extension`
    * Choose the `build/production/` directory from the file dialog
    * Done

**Firefox**

NetIP can be installed [from mozilla's store](https://addons.mozilla.org/en-US/firefox/addon/97c865f874d543128d35/).
The add-on can also be built locally and side-loaded - similar
to the process that was described for **Chromium|Chrome** users.

## Sources

* [github.com/@0x1eef](https://github.com/0x1eef/NetIP#readme)
* [gitlab.com/@0x1eef](https://gitlab.com/0x1eef/NetIP#about)
* [bsd.cafe/@0x1eef](https://brew.bsd.cafe/0x1eef/NetIP)

## License

[The MIT License](https://choosealicense.com/licenses/MIT/)
<br>
See [LICENSE](./share/NetIP/LICENSE)
