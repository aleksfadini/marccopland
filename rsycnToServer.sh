#!/bin/bash
#rsync -thrPvH --delete --update /media/BigTank/documents/Sites/spaceears/_site/ -e ssh afadini_spaceears@ssh.phx.nearlyfreespeech.net:/home/public
rsync -thrPvH --update /media/BigTank/documents/Sites/spaceears/_site/ -e ssh afadini_spaceears@ssh.phx.nearlyfreespeech.net:/home/public
