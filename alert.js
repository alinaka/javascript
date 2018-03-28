outer:
    for (var n = 2; n<= 10; n++) {
        for (var m = 2; m <n; m++) {
            if (n%m==0) continue outer;
        }
        alert(n);
    }