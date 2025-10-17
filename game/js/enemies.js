export const enemies = [];
const SIZE =26;

function pushEnemies(canvas) {
    const w = SIZE;
    const h = SIZE;
    const x = Math.random() * (canvas.width - w);
    const y = -h;
    const vy = 5;

    enemies.push({x,y,width: w,height: h,vy});
}

export function spawnEnemy(canvas) {
    if (enemies.lengyh < 5) {
        pushEnemies (canvas);
    }
}

// export function updateEnemies(canvas) {
//     for (let i - enemies.length - 1;i >= 0;1--) {
//         const e = enemies[i];
//         e.y += e.vy;
//         if (e.y > canvas.height) {
//             enemies.splice(i, 1);
//         }
//     }
// }

// export function drawEnemies(ctx) {
//     ctx.fillstyle = "crimson";
//     for (const e of enemies) {
//         ctx.fillRect(e.x, e.y, e.width, e.height);
//     }
// }
