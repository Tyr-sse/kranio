      ******************************************************************
      * Author: THIAGO ARCANJO
      * Date: 2022 07 11
      * Purpose: FILE HANDLE TRAINING
      * Tectonics: cobc
      ******************************************************************
       IDENTIFICATION DIVISION.
       PROGRAM-ID. FILE-HANDLER-01.
       ENVIRONMENT DIVISION.
        INPUT-OUTPUT SECTION.
         FILE-CONTROL.
          SELECT IN-FILE ASSIGN TO 'C:\Users\F9329132\foile.txt'
          ORGANIZATION IS LINE SEQUENTIAL

          FILE STATUS IS STTS.


       DATA DIVISION.
        FILE SECTION.
         FD IN-FILE.
          01  IN-REC PIC X(5) VALUE '.'.


        WORKING-STORAGE SECTION.
         77 CT                     PIC 99 VALUE ZEROS.

         77 WR                     PIC 99 VALUE ZEROS.

         77 STTS                   PIC XX VALUE '..'.
         77 INF                    PIC X  VALUE '_'.
         77 CR                     PIC X  VALUE 'M'.
         01  XE PIC X(100).
       PROCEDURE DIVISION.
        MAIN-PROCEDURE.
          PERFORM 000-MAIN.
          PERFORM 999-FIN.


          000-MAIN.
           PERFORM 001-INIT.
           PERFORM 002-READ UNTIL CT >= 44.

          001-INIT.
           DISPLAY 'INIT'.
           OPEN INPUT IN-FILE.

          002-READ.
           DISPLAY CT '- TRYING TO READ '
           ADD 1 TO CT.

           READ IN-FILE
            AT END
             DISPLAY 'EOF'
            NOT AT END
             DISPLAY 'CONTINUE'
             ADD 1 TO WR
           END-READ.

           DISPLAY STTS '|' IN-REC '|' .








          999-FIN.
           CLOSE IN-FILE.
           DISPLAY "BYE WR> " WR.
           STOP RUN.
       END PROGRAM FILE-HANDLER-01.
