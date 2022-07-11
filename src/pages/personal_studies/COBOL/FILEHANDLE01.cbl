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
          SELECT IN-FILE ASSIGN TO 'FILE_TO_BE_READ.txt'
          ORGANIZATION IS LINE SEQUENTIAL
          FILE STATUS IS STTS.


       DATA DIVISION.
        FILE SECTION.
         FD IN-FILE.
          01  IN-REC PIC X(100) VALUE '.'.


        WORKING-STORAGE SECTION.
         77 CT                     PIC 99 VALUE ZEROS.
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
           DISPLAY CT '- TRYING TO READ'.
           READ IN-FILE NEXT RECORD INTO XE.
           DISPLAY '|' XE '|' .




           ADD 1 TO CT.




          999-FIN.
           DISPLAY "BYE"
           STOP RUN.
       END PROGRAM FILE-HANDLER-01.
