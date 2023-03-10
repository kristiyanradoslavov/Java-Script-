function solve(input) {
    class Songs {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }


        print(type) {
            if (type === this.typeList) {
                console.log(this.name)
            } else if (type === "all") {
                console.log(this.name)
            }
        }
    }

    let totalSongs = input.shift();
    let finalType = input.pop();

    for (let i = 0; i < totalSongs; i++) {
        let [list, name, time] = input[i].split("_");
        let newSong = new Songs(list, name, time);
        newSong.print(finalType)
    }
}

solve(
    [2,
        'like_Replay_3:15',
        'ban_Photoshop_3:48',
        'all']

)