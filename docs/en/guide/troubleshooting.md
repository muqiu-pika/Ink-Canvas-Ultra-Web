---
title: Troubleshooting
createTime: 2025/10/05 09:37:10
permalink: /en/article/troubleshooting/
---
# Troubleshooting

Common issues and solutions to help you quickly diagnose and fix problems.

## Floating toolbar not visible

- Check if global hotkeys (e.g., `Alt+V`) are occupied by other software
- Verify button visibility toggles in “Appearance” settings

## Ink not showing in presentation

- Review “show canvas/clear strokes” policies in PowerPoint/WPS settings
- Ensure PPT is not in protected (read-only) mode

## Gestures not working

- Enable multi-touch and two-finger gesture switches in “Gesture” settings
- Check transform center setting (canvas center/object center)

## Screenshots not saved

- Confirm auto-save strategy and write permissions of target path; check disk space

## Settings not applied / lost after restart

- Ensure you are running V7.0.3 or later; older versions silently fail to save settings when installed to administrator-only directories such as `Program Files`
- Newer versions write `Settings.json` to `%APPDATA%\Ink Canvas\` (always writable by the current user) and automatically migrate legacy config files
- If the issue persists, exit the app, back up and delete `%APPDATA%\Ink Canvas\Settings.json`, then relaunch to rebuild default settings

## Log file too large

- The app auto-cleans `Log.txt` when it grows too large; you can delete it manually and restart

## Reset and migration

- Backup the data directory and restore default settings to troubleshoot
- For migration, copy the data directory to the same path on the new device and launch the app