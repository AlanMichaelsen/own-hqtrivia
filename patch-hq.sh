#!/usr/bin/env bash

APK_PATH=$1
NEW_HOST=$2

printf '\n[ Disassembling APK ]\n'
apktool d -r $APK_PATH -o _hqd
rm $APK_PATH

printf '\n[ Patching smali file ]\n'
sed -i "s~https://api-quiz.hype.space/~$NEW_HOST~g" "_hqd/smali_classes2/com/intermedia/network/h.smali"

printf '\n[ Rebuilding APK ]\n'
apktool b _hqd -o $APK_PATH

printf '\n[ Generating signing key ]\n'
STOREPASS=$(tr -dc 'a-zA-Z0-9' < /dev/urandom | fold -w 32 | head -n 1)
KEYPASS="$STOREPASS"
keytool -genkey -noprompt \
    -keyalg RSA \
    -keysize 2048 \
    -validity 10000 \
    -storepass "$STOREPASS" \
    -keypass "$KEYPASS" \
    -keystore key.keystore \
    -alias alias \
    -dname "CN=example.com, OU=dont, O=use, L=this, S=in, C=production"

printf '\n[ Signing APK ]\n'
jarsigner \
    -sigalg SHA1withRSA \
    -digestalg SHA1 \
    -keystore key.keystore \
    -storepass "$STOREPASS" \
    -keypass "$KEYPASS" \
    $APK_PATH \
    alias
rm key.keystore

printf '\n\nDone!\n\n'