/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(startHouse, endHouse, positionApples, positionOranges, apples, oranges) {
    // Write your code here
    let applesAtHouse = 0;
    let orangesAtHouse = 0;
    for (let apple of apples) {
        if ((apple + positionApples) >= startHouse &&
            (apple + positionApples) <= endHouse) {
            applesAtHouse++;
        }
    }
    for (let orange of oranges) {
        if ((orange + positionOranges) <= endHouse &&
            (orange + positionOranges) >= startHouse) {
            orangesAtHouse++;
        }
    }
    console.log(applesAtHouse);
    console.log(orangesAtHouse);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);


function viralAdvertising(n) {
    // Write your code here
    let invitations = 5;
    let dayOne = 2;
    let likes = 2;
    if (n === 1) {
        return dayOne;
    }
    for (let i = 1; i < n; i++){
        let todayLikes = ((Math.floor(invitations / 2)));
        invitations = todayLikes * 3;
        likes += (Math.floor(invitations/2));
    }

    return likes;

}
console.log(viralAdvertising(4));

