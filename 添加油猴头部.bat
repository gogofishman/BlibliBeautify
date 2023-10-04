CHCP 65001

for %%a in (描述.txt) do (
    more %%a >>output/output.js
)

cd dist
for %%a in (main.js) do (
    more %%a >>../output/output.js
)
