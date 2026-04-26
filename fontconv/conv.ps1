D:\apps\FontForgeBuilds\fontforge -lang=ff -c 'Open($1); Save($2)' MSSansSerif/src/sserife.fon MSSansSerif/sfd/sserife.sfd
D:\apps\FontForgeBuilds\fontforge -lang=ff -c 'Open($1); Save($2)' MSSansSerif/src/sseriff.fon MSSansSerif/sfd/sseriff.sfd

foreach ($cp in 1250,1251,1253,1254,1257) {
  D:\apps\FontForgeBuilds\fontforge -lang=ff -c 'Open($1); Reencode($3, 1); Save($2)' "MSSansSerif/src/ssee$cp.fon" "MSSansSerif/sfd/ssee$cp.sfd" "cp$cp"
  D:\apps\FontForgeBuilds\fontforge -lang=ff -c 'Open($1); Reencode($3, 1); Save($2)' "MSSansSerif/src/ssef$cp.fon" "MSSansSerif/sfd/ssef$cp.sfd" "cp$cp"
}

Remove-Item -Recurse -Force MSSansSerif/ttf-normal/*, MSSansSerif/ttf-fauxbold/*

# BitsNPicas splits each bitmap font into sizes:
# Windows shows them as 8/10/12/14/18/24 (in pts)
# sserife (96 DPI): 11 (A: 9x7), 13 (10x9), 16 (12x11), 19 (14x13, bold), 24 (17x15, bold), 32 (23x22, bold)
# sseriff (120 DPI): 13 (10x9, same as sserife-2), 17 (12x11, bold), 20 (15x14, bold), 23 (17x15, bold, same as sserife-5), 30 (21x21, bold), 40 (29x27, bold)
# (1px = 1pt × dpi / 72)

java -jar BitsNPicas.jar convertbitmap -Y -o "MSSansSerif/ttf-normal/sserife.ttf" "MSSansSerif/sfd/sserife.sfd"
java -jar BitsNPicas.jar convertbitmap -Y -o "MSSansSerif/ttf-normal/sseriff.ttf" "MSSansSerif/sfd/sseriff.sfd"

foreach ($cp in 1250,1251,1253,1254,1257) {
  java -jar BitsNPicas.jar convertbitmap -Y -o "MSSansSerif/ttf-normal/ssee$cp.ttf" "MSSansSerif/sfd/ssee$cp.sfd"
  java -jar BitsNPicas.jar convertbitmap -Y -o "MSSansSerif/ttf-normal/ssef$cp.ttf" "MSSansSerif/sfd/ssef$cp.sfd"
}

# Faux bold versions

java -jar BitsNPicas.jar convertbitmap -Y -b -o "MSSansSerif/ttf-fauxbold/sserife.ttf" "MSSansSerif/sfd/sserife.sfd"
java -jar BitsNPicas.jar convertbitmap -Y -b -o "MSSansSerif/ttf-fauxbold/sseriff.ttf" "MSSansSerif/sfd/sseriff.sfd"

foreach ($cp in 1250,1251,1253,1254,1257) {
  java -jar BitsNPicas.jar convertbitmap -Y -b -o "MSSansSerif/ttf-fauxbold/ssee$cp.ttf" "MSSansSerif/sfd/ssee$cp.sfd"
  java -jar BitsNPicas.jar convertbitmap -Y -b -o "MSSansSerif/ttf-fauxbold/ssef$cp.ttf" "MSSansSerif/sfd/ssef$cp.sfd"
}