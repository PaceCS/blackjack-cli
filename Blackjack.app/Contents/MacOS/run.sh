#!/bin/sh

dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
open -a Terminal

osascript <<END
tell application "Terminal"
    do script "clear;cd $dir/../../..; node play.js"
end tell
END
