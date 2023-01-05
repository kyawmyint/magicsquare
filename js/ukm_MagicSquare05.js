function doMagicSquare(N){
    var grid = createEmptySquare(N);
    var x = 1;
 
      makeMagicSquare(N,grid);

         return grid;
}
// Even Magic Square Solver
function fillingGrid(N,grid){
   for (var i = 1; i <= N; i++) {
    for (var j = 1; j <= N; j++) {
    grid[N+i-1][N+j-1] = grid[i-1][j-1]+N*N;
    grid[i-1][N+j-1] = grid[i-1][j-1]+N*N*2;
    grid[N+i-1][j-1] = grid[i-1][j-1]+N*N*3;
    }
} 
}

function makeMagicSquare(N,grid) {
      var R1 = 1;
       var C1 = Math.floor(N / 2) + 1;
       var x= 1;
       grid[R1-1][C1-1] = x;
  for (var i = 1; i <= N; i++) {
      for (var j = 1; j <= N; j++) {

           if (C1 > N)  C1 = 1;
           if (R1 == 0)  R1 = N;
               grid[R1-1][C1-1] = x;
            C1 = C1 + 1;
            R1 = R1 - 1;
          x = x + 1;
      }
      R1 = R1 + 2;
      C1 = C1 - 1;
     
  } 
}
//***********************************************

function makeMagicSquare04(N,grid)
{
  R2 = 1;
  C2 = 1;
  C3 = 0;

  for (var i = 1; i <= N; i++) {
      
      for (var j = 1; j <= N; j++) {
          if ((i ==1) || (i==4)) {C1=j;} else {
          C1= C3-j;}
           grid[R2-1][C1-1] = C2;    		
          C2 = C2 +1;
      }
      C3 = N+1;	
      R2 = R2 +1;	
  } 
//				 Exchanging the numbers  
  
      for (var j = 1; j <= N-2; j++) { 
           x = grid[1][j];
              grid[1][j] = grid[2][j];
              grid[2][j] = x;
//						
              x = grid[0][j];
              grid[0][j] = grid[3][j];
              grid[3][j] = x;

      } 

}
//***********************************************
function ExchangingMagicSquare06(N,grid)
{
  for (var j = 0; j <= N-2; j++) {
    R1 = j;
    C1 = j;
        for (var i = j; i <= 1; i++) {
            x = grid[R1][C1];
            grid[R1][C1] = grid[R1+N][C1];
            grid[R1+N][C1] = x;
            R1 = R1+2;
        }
  }					
}
//***********************************************
function ExchangingMagicSquare08(N,grid)
{
  for (var j = 0; j <= N-1; j++) {
    C1 = j;
    if ((C1 == 1) || (C1==2)) { C1 = C1+N;}
  
        for (var i = 0; i <= N-1; i++) {
            R1 = i;
          
            x = grid[R1][C1];
            grid[R1][C1] = grid[R1+N][C1];
            grid[R1+N][C1] = x;
        
             }					
  }

}
//***********************************************
function ExchangingMagicSquare10(N,grid)
{
  for (var j = 0; j <= 2; j++) {
    C1 = j;
    for (var i = 0; i <= N-1; i++) {
    R1 = i;
      if (C1 == 1) { C1 = 3;}
        if (C1 == 2) { C1 = C1 + 4;}
             x = grid[R1][C1];
          grid[R1][C1] = grid[R1+N][C1];
          grid[R1+N][C1] = x;
        }
      } 

// *********************************
x = grid[2][2]
grid[2][2] = grid[7][2]
grid[7][2] = x
//**********************************
x = grid[2][3]
grid[2][3] = grid[7][3]
grid[7][3] = x

}
//*********************************************
function ExchangingMagicSquare12(N,grid)
{
  for (var j = 0; j <= 2; j++) {
    C1 = j;
  
  for (var i = 0; i <= N-1; i++) {
        R1 = i;	
  
        x = grid[R1][C1];
        grid[R1][C1] = grid[R1+N][C1];
        grid[R1+N][C1] = x;
  
           x = grid[R1][N+N-C1-1];
        grid[R1][N+N-C1-1] = grid[R1+N][N+N-C1-1];
        grid[R1+N][N+N-C1-1] = x;
  
  }
  }
}
//*********************************************
function ExchangingMagicSquare14(N,grid)
{
  for (var j = 0; j <= 2; j++) {
    C1 = j;
  
  for (var i = 0; i <= N-1; i++) {
        R1 = i;	
  
        x = grid[R1][C1];
        grid[R1][C1] = grid[R1+N][C1];
        grid[R1+N][C1] = x;
        if(j<2){
               x = grid[R1][N+N-C1-1];
            grid[R1][N+N-C1-1] = grid[R1+N][N+N-C1-1];
            grid[R1+N][N+N-C1-1] = x;
            }
  
  }
  }
        x = grid[3][11];
        grid[3][11] = grid[10][11];
        grid[10][11] = x;
  
        x = grid[3][8];
        grid[3][8] = grid[10][8];
        grid[10][8] = x;
  
        x = grid[3][9];
        grid[3][9] = grid[10][9];
        grid[10][9] = x;
  
        x = grid[3][3];
        grid[3][3] = grid[10][3];
        grid[10][3] = x;
 
}
//*********************************************
function ExchangingMagicSquare16(N,grid)
{
  N=8;
  for (var j = 2; j <= 5; j++) {
      C1 = j;
    
    for (var i = 0; i <= N-1; i++) {
          R1 = i;	
          if(C1==5){C1 = 15};
          x = grid[R1][C1];
          grid[R1][C1] = grid[R1+N][C1];
          grid[R1+N][C1] = x;
          
    }
    }
    
    for (var k = 0; k <= 1; k++) {
      C1 = k;
      C2 = k+2;
      R1 = k;
      R2 = N-1;
  
      x = grid[R1][C1];
      grid[R1][C1] = grid[R1+N][C1];
      grid[R1+N][C1] = x;
  
      x = grid[R1][C2];
          grid[R1][C2] = grid[R1+N][C2];
          grid[R1+N][C2] = x;
  
          x = grid[R2][C1];
          grid[R2][C1] = grid[R2+N][C1];
          grid[R2+N][C1] = x;
      
          x = grid[R2][C2];
              grid[R2][C2] = grid[R2+N][C2];
              grid[R2+N][C2] = x;
              R2 = N; 
    }
  
}
//*********************************************
function ExchangingMagicSquare18(N,grid)
{
  N=9;
  for (var j = 0; j <= 3; j++) {
      C1 = j;
    
    for (var i = 0; i <= N-1; i++) {
          R1 = i;	
          x = grid[R1][C1];
          grid[R1][C1] = grid[R1+N][C1];
          grid[R1+N][C1] = x;
          if(j<3) {
            x = grid[R1][N+N-C1-1];
            grid[R1][N+N-C1-1] = grid[R1+N][N+N-C1-1];
            grid[R1+N][N+N-C1-1] = x;
              }
          
        }
      }
          x = grid[4][4];
          grid[4][4] = grid[13][4];
          grid[13][4] = x;
  
          x = grid[4][14];
          grid[4][14] = grid[13][14];
          grid[13][14] = x;
  
          x = grid[4][12];
          grid[4][12] = grid[13][12];
          grid[13][12] = x;
  
          x = grid[4][10];
          grid[4][10] = grid[13][10];
          grid[13][10] = x;
 
}
//*********************************************
function ExchangingMagicSquare20(N,grid)
{
  for (var j = 0; j <= 5; j++) {
    C1 = j;
  
  for (var i = 0; i <= N-1; i++) {
        R1 = i;	
        if(C1 == 5) {C1 = 18};
        if(C1 == 4) {C1 = 19};
         x = grid[R1][C1];
        grid[R1][C1] = grid[R1+N][C1];
        grid[R1+N][C1] = x;
      }
    }
  
        x = grid[4][4];
        grid[4][4] = grid[14][4];
        grid[14][4] = x;
  
        x = grid[5][5];
        grid[5][5] = grid[15][5];
        grid[15][5] = x;
  // **************************
        x = grid[5][4];
        grid[5][4] = grid[15][4];
        grid[15][4] = x;
  
        x = grid[4][5];
        grid[4][5] = grid[14][5];
        grid[14][5] = x;
  // **************************
  for (var j = 10; j <= 15; j++) {
    C1 = j;
  
  for (var i = 4; i <= 5; i++) {
        R1 = i;	
        if(j > 13) {C1 = j +3};
  
        x = grid[R1][C1];
        grid[R1][C1] = grid[R1+N][C1];
        grid[R1+N][C1] = x;
      }
    }
 

}
//*********************************************
function ExchangingMagicSquare22(N,grid)
{
  for (var j = 0; j <= 4; j++) {
    C1 = j;
  
  for (var i = 0; i <= N-1; i++) {
        R1 = i;	
         x = grid[R1][C1];
        grid[R1][C1] = grid[R1+N][C1];
        grid[R1+N][C1] = x;
        if(j<5){
          x = grid[R1][N+N-C1-1];
       grid[R1][N+N-C1-1] = grid[R1+N][N+N-C1-1];
       grid[R1+N][N+N-C1-1] = x;
       }        
      }
    }
  
        x = grid[5][5];
        grid[5][5] = grid[16][5];
        grid[16][5] = x;
  // **************************
  for (var j = 11; j <= 13; j++) {
      C1 = j;
      x = grid[5][C1];
      grid[5][C1] = grid[16][C1];
      grid[16][C1] = x;
  }

}
//*********************************************
function ExchangingMagicSquare24(N,grid)
{
  for (var j = 0; j <= 5; j++) {
    C1 = j;
  
  for (var i = 0; i <= N-1; i++) {
        R1 = i;	
        if(C1 == 5) {C1 = 18};
        if(C1 == 4) {C1 = 19};
         x = grid[R1][C1];
        grid[R1][C1] = grid[R1+N][C1];
        grid[R1+N][C1] = x;

        x = grid[R1][N+N-C1-1];
        grid[R1][N+N-C1-1] = grid[R1+N][N+N-C1-1];
        grid[R1+N][N+N-C1-1] = x;

      }
    }
  
}
//*********************************************
function ExchangingMagicSquare26(N,grid)
{
  for (var j = 0; j <= 5; j++) {
    C1 = j;
  
  for (var i = 0; i <= N-1; i++) {
        R1 = i;	
         x = grid[R1][C1];
        grid[R1][C1] = grid[R1+N][C1];
        grid[R1+N][C1] = x;
        if(j<5){
          x = grid[R1][N+N-C1-1];
       grid[R1][N+N-C1-1] = grid[R1+N][N+N-C1-1];
       grid[R1+N][N+N-C1-1] = x;
       }        
      }
    }
  
        x = grid[6][6];
        grid[6][6] = grid[19][6];
        grid[19][6] = x;

   
  // **************************
  for (var j = 13; j <= 15; j++) {
      C1 = j;
    
      x = grid[6][C1];
      grid[6][C1] = grid[N+6][C1];
      grid[N+6][C1] = x;
  }

}
//*********************************************
function ExchangingMagicSquare28(N,grid)
{
  for (var j = 0; j <= 6; j++) {
    C1 = j;
  
  for (var i = 0; i <= N-1; i++) {
            R1 = i;	
            x = grid[R1][C1];
          grid[R1][C1] = grid[R1+N][C1];
          grid[R1+N][C1] = x;
          if(j<6){
            x = grid[R1][N+N-C1-1];
          grid[R1][N+N-C1-1] = grid[R1+N][N+N-C1-1];
          grid[R1+N][N+N-C1-1] = x;
      }        
    } 
  }  
        x = grid[9][18];
        grid[9][18] = grid[23][18];
        grid[23][18] = x;
  
        x = grid[7][21];
        grid[7][21] = grid[21][21];
        grid[21][21] = x;
  // **************************
   
  // **************************
  for (var i = 0; i <= 10; i++) {
      C1 = 15;
      R1= i;
          if(i == 1) {C1 = 14;}
          if(i == 7) {R1 = 8;}
          if(R1 > 7) {R1 = R1 + 2;}
          if(i == 9) {C1 = 14;}
          x = grid[R1][C1];
        grid[R1][C1] = grid[R1+N][C1];
        grid[R1+N][C1] = x;
      
    }
 

}
//*********************************************
function ExchangingMagicSquare30(N,grid)
{
  for (var j = 0; j <= 7; j++) {
    C1 = j;
  
  for (var i = 0; i <= N-1; i++) {
            R1 = i;	
            x = grid[R1][C1];
          grid[R1][C1] = grid[R1+N][C1];
          grid[R1+N][C1] = x;
          if(j<6){
            x = grid[R1][N+N-C1-1];
          grid[R1][N+N-C1-1] = grid[R1+N][N+N-C1-1];
          grid[R1+N][N+N-C1-1] = x;
      }        
    } 
  }  
 // **************************

for (var i = 0; i <= 14; i++) {
          R1 = i;	
       for (var j = 18; j <= 20; j++) {
            C1 = j;
          if(i>2) {C1 = C1 -3}
          if(i>10) {C1 = C1 +1}
          x = grid[R1][C1];
        grid[R1][C1] = grid[R1+N][C1];
        grid[R1+N][C1] = x;
     }        
  } 
} 
//***********************************************
function ExchangingMagicSquare32(N,grid){
  N = 16;
  for (var j = 0; j <= 8; j++) {
    C1 = j;
  
  for (var i = 0; i <= N-1; i++) {
            R1 = i;	
          if(C1== 8 ) {C1 = 23;}
          x = grid[R1][C1];
          grid[R1][C1] = grid[R1+N][C1];
          grid[R1+N][C1] = x;
          if(j<7){
            x = grid[R1][N+N-C1-1];
          grid[R1][N+N-C1-1] = grid[R1+N][N+N-C1-1];
          grid[R1+N][N+N-C1-1] = x;
        }        
     } 
    }
  
}
//***********************************************
function ExchangingMagicSquare34(N,grid){
  N = 17;
  for (var j = 0; j <= 8; j++) {
   C1 = j;
 
 for (var i = 0; i <= N-1; i++) {
           R1 = i;	
         x = grid[R1][C1];
         grid[R1][C1] = grid[R1+N][C1];
         grid[R1+N][C1] = x;
         if(j<7){
           x = grid[R1][N+N-C1-1];
         grid[R1][N+N-C1-1] = grid[R1+N][N+N-C1-1];
         grid[R1+N][N+N-C1-1] = x;
       }        
     } 
   }
 
   for (var i = 0; i <= 16; i++) {
     R1 = i;
   
   for (var j = 21; j <= 23; j++) {
             C1 = j;	
             if (i > 2) {C1 = j - 4;}
             if (i > 13){C1 = j - 1 ;} 
           x = grid[R1][C1];
           grid[R1][C1] = grid[R1+N][C1];
           grid[R1+N][C1] = x;
         } 
       }
 

}
//***********************************************
function ExchangingMagicSquare36(N,grid){
  N = 18;
  for (var j = 0; j <= 11; j++) {
   C1 = j;
 
 for (var i = 0; i <= N-1; i++) {
           R1 = i;	
           R2 = N * 2 - i-1 ;
   
         if(j>5) {
           if(i==j) {       
         
             x = grid[R1][C1];
             grid[R1][C1] = grid[R1+N][C1];
             grid[R1+N][C1] = x;
 
             x = grid[R2][C1];
             grid[R2][C1] = grid[R2-N][C1];
             grid[R2-N][C1] = x;}
           }else{
              x = grid[R1][C1];
              grid[R1][C1] = grid[R1+N][C1];
              grid[R1+N][C1] = x;
            }        
           } 
       }
     
     
   for (var i = 6; i <= 11; i++) {
     R1 = i;
   
   for (var j = 18; j <= 20; j++) {
             C1 = j;	
             x = grid[R1][C1];
             grid[R1][C1] = grid[R1+N][C1];
             grid[R1+N][C1] = x;
         } 
         x = grid[R1][4];
         grid[R1][4] = grid[R1+N][4];
         grid[R1+N][4] = x;
 
       }
 
}
//***********************************************
function ExchangingMagicSquare38(N,grid){
  N = 19;
 for (var j = 0; j <= 12; j++) {
  C1 = j;

for (var i = 0; i <= N-1; i++) {
          R1 = i;	
          R2 = N * 2 - i-1 ;
  
        if(j>6) {
          if(i==j) {       
             x = grid[R1][C1];
            grid[R1][C1] = grid[R1+N][C1];
            grid[R1+N][C1] = x;

            x = grid[R2][C1];
            grid[R2][C1] = grid[R2-N][C1];
            grid[R2-N][C1] = x;}
          }else{
             x = grid[R1][C1];
             grid[R1][C1] = grid[R1+N][C1];
             grid[R1+N][C1] = x;
           }
           if(j<2) {    
            x = grid[R1][C1+N];
            grid[R1][C1+N] = grid[R1+N][C1+N];
            grid[R1+N][C1+N] = x;
          
          }     
          } 
      }
    
    
  for (var i = 6; i <= 12; i++) {
    R1 = i;
    for (var j = 22; j <= 24; j++) {
            C1 = j;	
            x = grid[R1][C1];
            grid[R1][C1] = grid[R1+N][C1];
            grid[R1+N][C1] = x;
        } 
      }
 
      for (var i = 7; i <= 8; i++) {
        R1 = i;
        for (var j = 33; j <= 35; j++) {
                C1 = j;	
                x = grid[R1][C1];
                grid[R1][C1] = grid[R1+N][C1];
                grid[R1+N][C1] = x;

                x = grid[R1+3][C1];
                grid[R1+3][C1] = grid[R1+3+N][C1];
                grid[R1+3+N][C1] = x;

              } 
          }

}
//***********************************************
function ExchangingMagicSquare40(N,grid){
  N = 20;
  for (var j = 0; j <= 12; j++) {
   C1 = j;
 
 for (var i = 0; i <= N-1; i++) {
           R1 = i;	
           R2 = N * 2 - i-1 ;
   
         if(j>6) {
           if(i==j) {       
              x = grid[R1][C1];
             grid[R1][C1] = grid[R1+N][C1];
             grid[R1+N][C1] = x;
 
             x = grid[R2][C1];
             grid[R2][C1] = grid[R2-N][C1];
             grid[R2-N][C1] = x;}
           }else{
              x = grid[R1][C1];
              grid[R1][C1] = grid[R1+N][C1];
              grid[R1+N][C1] = x;
            }
            if(j<1) {    
             x = grid[R1][C1+N];
             grid[R1][C1+N] = grid[R1+N][C1+N];
             grid[R1+N][C1+N] = x;
           
           }     
           } 
       }
     
     
   for (var i = 7; i <= 12; i++) {
     R1 = i;
     for (var j = 21; j <= 27; j++) {
             C1 = j;	
         if(C1==27){C1 = 33;}
             x = grid[R1][C1];
             grid[R1][C1] = grid[R1+N][C1];
             grid[R1+N][C1] = x;
         } 
       }
 

}
//***********************************************

function doMagicSquareEven(N){
    var grid = createEmptySquare(N);
    
  var pointer;
       var N2 = Math.pow(N, 2);
  switch (N){
  case 4:
        makeMagicSquare04(N,grid)  ;   
  break;
  case 6:
      var grid = createEmptySquare(N);
      var x = 1;
      var pointer;
  /* Magic Square 3x3 */
      N=3;
      makeMagicSquare(N,grid);
// ***************************************
// Filling the numbers into  cells
      N=3;
      fillingGrid(N,grid);
// ***************************************
//				 Exchanging the numbers  6x6
//***************************************** 
      ExchangingMagicSquare06(N,grid);
//***************************************** 

  break;
  case 8:
        var grid = createEmptySquare(N);
        var x = 1;
        var pointer; 
        makeMagicSquare04(N,grid);
 
// ***************************************
// Filling the numbers into  cells   8x8
// ***************************************
        N=4;
        fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  8x8
//***************************************** 
        ExchangingMagicSquare08(N,grid);

  break;
  case 10:
        var grid = createEmptySquare(N);
        var x = 1;
        var pointer;

  /* Magic Square 5x5 */
      N = 5;
      makeMagicSquare(N,grid);
// ***************************************
// Filling the numbers into  cells
      N = 5;
      fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  10x10
//*****************************
      ExchangingMagicSquare10(N,grid);
  break;
  case 12:

        var grid = createEmptySquare(N);
        var x = 1;
        var pointer;


// ***************************************
  /* Magic Square 3x3 */
        N=3;
        makeMagicSquare(N,grid);
// ***************************************
// Filling the numbers into  cells 6x6
        N=3;
        fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  6x6
//***************************************** 
        ExchangingMagicSquare06(N,grid);
// ***************************************
// Filling the numbers into  cells 12 x 12
// ***************************************
          N=6;
          fillingGrid(N,grid);

// ***********************************************
//				 Exchanging the numbers  12 x12
//*********************************************** 
          ExchangingMagicSquare12(N,grid);
//*********************************************** 
  break;
  case 14:
        var grid = createEmptySquare(N);
        var x = 1;
        var pointer;

// ***************************************
  /* Magic Square 7x7 */
// ***************************************
        N=7;
        makeMagicSquare(N,grid);

// ***************************************
// Filling the numbers into  cells
        N=7;
        fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  14x14
//*****************************************
        ExchangingMagicSquare14(N,grid); 
//***************************************** 
 
  break;
  case 16:
    var grid = createEmptySquare(N);
    var x = 1;
    N=4;
    makeMagicSquare04(N,grid)
 
    // ***************************************
    // Filling the numbers into  cells   8x8
    // ***************************************
      N=4;
      fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  8x8
//***************************************** 
        ExchangingMagicSquare08(N,grid);
// ***************************************
// Filling the numbers into  cells   16x16
// ***************************************
      N=8;
      fillingGrid(N,grid);

// ***************************************
//		Exchanging the numbers  16x16
//***************************************** 
ExchangingMagicSquare16(N,grid);

  break;
  case 18:
    var grid = createEmptySquare(N);
    var x = 1;
    var pointer;

/* Magic Square 5x5 */
  N = 9;
  makeMagicSquare(N,grid);
// ***************************************
// Filling the numbers into  cells
  N = 9;
  fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  18x18
//*****************************
  ExchangingMagicSquare18(N,grid);

  break;
  case 20:
    var grid = createEmptySquare(N);
    var x = 1;
    var pointer;

/* Magic Square 5x5 */
  N = 5;
  makeMagicSquare(N,grid);
// ***************************************
// Filling the numbers into  cells
  N = 5;
  fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  10x10
//*****************************
  ExchangingMagicSquare10(N,grid);
// Filling the numbers into  cells
N = 10;
fillingGrid(N,grid);
// ***************************************
//				 Exchanging the numbers  20x20
//*****************************************

ExchangingMagicSquare20(N,grid)
  break;
  case 22:
    var grid = createEmptySquare(N);
    var x = 1;
    var pointer;

/* Magic Square 5x5 */
  N = 11;
  makeMagicSquare(N,grid);
// ***************************************
// Filling the numbers into  cells
  N = 11;
  fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  22x22
//*****************************
  ExchangingMagicSquare22(N,grid);

  break;
  case 24:

    var grid = createEmptySquare(N);
    var x = 1;
    var pointer;


// ***************************************
/* Magic Square 3x3 */
    N=3;
    makeMagicSquare(N,grid);
// ***************************************
// Filling the numbers into  cells 6x6
    N=3;
    fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  6x6
//***************************************** 
    ExchangingMagicSquare06(N,grid);
// ***************************************
// Filling the numbers into  cells 12 x 12
// ***************************************
      N=6;
      fillingGrid(N,grid);

// ***********************************************
//				 Exchanging the numbers  12 x12
//*********************************************** 
      ExchangingMagicSquare12(N,grid);
//*********************************************** 
// Filling the numbers into  cells 24 x 24
// ***************************************
N=12;
fillingGrid(N,grid);

// ***********************************************
//				 Exchanging the numbers  24 x24
//*********************************************** 
ExchangingMagicSquare24(N,grid);
//*********************************************** 
break;
  case 26:
    var grid = createEmptySquare(N);
    var x = 1;
    var pointer;

/* Magic Square 5x5 */
  N = 13;
  makeMagicSquare(N,grid);
// ***************************************
// Filling the numbers into  cells
  N = 13;
  fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  26x26
//*****************************
  ExchangingMagicSquare26(N,grid);

  break;
  case 28:
        var grid = createEmptySquare(N);
        var x = 1;
        var pointer;

// ***************************************
  /* Magic Square 7x7 */
// ***************************************
        N=7;
        makeMagicSquare(N,grid);

// ***************************************
// Filling the numbers into  cells
        N=7;
        fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  14x14
//*****************************************
        ExchangingMagicSquare14(N,grid); 
//***************************************** 
// Filling the numbers into  cells
N=14;
fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  28x28
//*****************************************
ExchangingMagicSquare28(N,grid); 
//***************************************** 

  break;
  case 30:
    var grid = createEmptySquare(N);
    var x = 1;
    var pointer;

/* Magic Square 5x5 */
  N = 15;
  makeMagicSquare(N,grid);
// ***************************************
// Filling the numbers into  cells
  N = 15;
  fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  18x18
//*****************************
  ExchangingMagicSquare30(N,grid);

  break;
  case 32:
    var grid = createEmptySquare(N);
    var x = 1;
    N=4;
    makeMagicSquare04(N,grid)
 
    // ***************************************
    // Filling the numbers into  cells   8x8
    // ***************************************
      N=4;
      fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  8x8
//***************************************** 
        ExchangingMagicSquare08(N,grid);
// ***************************************
// Filling the numbers into  cells   16x16
// ***************************************
      N=8;
      fillingGrid(N,grid);

// ***************************************
//		Exchanging the numbers  16x16
//***************************************** 
ExchangingMagicSquare16(N,grid);
// ***************************************
// Filling the numbers into  cells   32x32
// ***************************************
      N=16;
      fillingGrid(N,grid);

// ***************************************
//		Exchanging the numbers  32x32
//***************************************** 
ExchangingMagicSquare32(N,grid);
  break;
  case 34:
    var grid = createEmptySquare(N);
    var x = 1;
    var pointer;

/* Magic Square 5x5 */
  N = 17;
  makeMagicSquare(N,grid);
// ***************************************
// Filling the numbers into  cells
  N = 17;
  fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  34x34
//*****************************
ExchangingMagicSquare34(N,grid);
  break;
  case 36:
    var grid = createEmptySquare(N);
    var x = 1;
    var pointer;

/* Magic Square 5x5 */
  N = 9;
  makeMagicSquare(N,grid);
// ***************************************
// Filling the numbers into  cells
  N = 9;
  fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  18x18
//*****************************
  ExchangingMagicSquare18(N,grid);
// ***************************************
// Filling the numbers into  cells
N = 18;
fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  36x36
//*****************************
ExchangingMagicSquare36(N,grid);
  break;
  case 38:
    var grid = createEmptySquare(N);
    var x = 1;
    var pointer;

/* Magic Square 5x5 */
  N = 19;
  makeMagicSquare(N,grid);
// ***************************************
// Filling the numbers into  cells
  N = 19;
  fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  38x38
//*****************************
  ExchangingMagicSquare38(N,grid);
 
  break;
  case 40:
    var grid = createEmptySquare(N);
    var x = 1;
    var pointer;

/* Magic Square 5x5 */
  N = 5;
  makeMagicSquare(N,grid);
// ***************************************
// Filling the numbers into  cells
  N = 5;
  fillingGrid(N,grid);

// ***************************************
//				 Exchanging the numbers  10x10
//****************************************
  ExchangingMagicSquare10(N,grid);
// Filling the numbers into  cells
N = 10;
fillingGrid(N,grid);
// ***************************************
//				 Exchanging the numbers  20x20
//*****************************************

ExchangingMagicSquare20(N,grid);
// Filling the numbers into  cells
N = 20;
fillingGrid(N,grid);
// ***************************************
//				 Exchanging the numbers  20x20
//*****************************************
ExchangingMagicSquare40(N,grid);
  break;
  }
    return grid;
}
//***********************************************

// create an empty multidimentional array of N x N
function createEmptySquare(N){
    var square = new Array();
    for(var i=0; i < N; i++){
        square.splice(i, 0, new Array());
        for(var j=0; j < N; j++){
            square[i].splice(i, 0, 0);
        }
    }
    return square;
}
//***********************************************

//show magic square table
function showMagic(magicSquare) {
    var table = '';
    var magicTable = document.getElementById("magic-number");
    
    for(var i=0; i < magicSquare.length; i++){
        table += '<tr>';
        for(var j=0; j < magicSquare[i].length; j++){
            table += '<td>'+magicSquare[i][j]+'</td>';
        }	
        table += '</tr>';
    }

    magicTable.innerHTML = table;
}
//***********************************************
//show magic sum
function showMagicSum(N){
    var magicSum = document.getElementById("magic-sum");
    var magicSumNumber = N*((Math.pow(N, 2)+1)/2);
    magicSum.innerHTML = 'Magic Sum: '+magicSumNumber;
}
//***********************************************
