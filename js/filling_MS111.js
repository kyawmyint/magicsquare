function fillingMS(N1,grid1)
{
    for (var i = 1; i <= N; i++) {
        for (var j = 1; j <= N; j++) {
        grid1[N+i-1][N+j-1] = grid1[i-1][j-1]+N*N;
        grid1[i-1][N+j-1] = grid1[i-1][j-1]+N*N*2;
        grid1[N+i-1][j-1] = grid1[i-1][j-1]+N*N*3;
        }
    }
    return grid1   
}
