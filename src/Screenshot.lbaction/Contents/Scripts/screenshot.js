function run() {
    try {
        LaunchBar.execute('/usr/sbin/screencapture', '-i', '-c');
        LaunchBar.executeAppleScript('tell application "System Events" \n' +
                             '    keystroke "u" using {command down, shift down} \n' +
                             'end tell');
    } catch (exception) {
        LaunchBar.log('Screenshot Error ' + exception + ' -- ' + path);
        LaunchBar.alert('Screenshot Error', exception);
        return;
    }

    return;
}
