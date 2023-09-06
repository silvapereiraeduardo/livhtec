#!/bin/sh
yarn cache clean && yarn && yarn start
# Comando para manter container executando
# tail -f /dev/null