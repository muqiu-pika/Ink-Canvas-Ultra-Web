---
title: Installation & Update
createTime: 2025/10/05 09:35:10
permalink: /en/article/install-update/
---
# Installation & Update

This guide explains how to install, update, and maintain Ink Canvas Ultra.

## System Requirements

- OS: Windows 10/11 (64-bit recommended)
- Hardware: Touchscreen or stylus recommended; mouse-only is supported
- Runtime: Install required .NET runtimes when prompted

## Installation

1. Download the latest installer from [GitHub Releases](https://github.com/muqiu-pika/Ink-Canvas-Ultra/releases/latest)
2. Run the installer and follow the wizard
3. Launch from Start menu or desktop shortcut

> If Windows shows security dialogs, choose “Allow/Run anyway”.

## Updating

- Auto Update: Enable auto-update and quiet hours in “Settings > Startup/Update”
- Manual Check: Use “Check for Updates” from About/Settings pages
- Overwrite Install: Install new versions over existing ones; personal settings are preserved

## Data & Backup

- Data Directory: Stored in user profile (e.g., `AppData\\Roaming\\InkCanvasUltra`) for settings, screenshots, logs
- Migration: Copy the data directory to the same path on a new machine

## Common Issues

- Fails to start: Ensure .NET runtime installed; run as normal user; stop conflicting whiteboard apps
- PPT not recognized: Check protected (read-only) mode; verify Office/WPS compatibility

## Upgrade Tips

- Backup the data directory before major upgrades
- After update, open “Operating Guide” to learn new hotkeys and features