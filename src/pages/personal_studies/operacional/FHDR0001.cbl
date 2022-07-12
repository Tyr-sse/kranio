      ******************************************************************
      * Author: THIAGO ARCANJO
      * Date: 20220712
      * Purpose: ESTUDAR COBOL
      * Tectonics: cobc
      ******************************************************************
       IDENTIFICATION DIVISION.
        PROGRAM-ID. FHDR0001.
       ENVIRONMENT DIVISION.
        CONFIGURATION SECTION.

        INPUT-OUTPUT SECTION.
         FILE-CONTROL.
          SELECT IN-FL ASSIGN 'C:\Users\F9329132\operacional\log_01.txt'
          ORGANIZATION IS LINE SEQUENTIAL.
      *   SELECT OUT-FL ASSIGN ''.
       DATA DIVISION.
        FILE SECTION.
         COPY 'FHBOOK01.COB'.

        WORKING-STORAGE SECTION.
      * COPY 'C:\Users\F9329132\operacional\FHBOOK01.COB'.
        COPY 'FHBOOK02.COB'.


       PROCEDURE DIVISION.
         000-MAIN.
         DISPLAY 'MAIN: FHDR0001'.
         PERFORM 100-INIT.
         PERFORM 200-PROCESS.
         PERFORM 300-END.
        100-INIT.
         DISPLAY 'INIT: FHDR0001'.
      *  DISPLAY XABLAU '<'.
         MOVE 0 TO CT-03.
         PERFORM 101-LP UNTIL CT-03 > 8.
         MOVE 0 TO CT-03.
         PERFORM 102-LP UNTIL CT-03 > 8.



         PERFORM 300-END.
        101-LP.
          ADD 1 TO CT-03.
          COMPUTE CT-04 = CT-03*2 + 1 .
          DISPLAY ' INP>' CT-04.
          MOVE CT-04 TO ARR01(CT-03).

        102-LP.
          ADD 1 TO CT-03.
          DISPLAY ' > ' ARR01(CT-03).

        200-PROCESS.
         DISPLAY 'PROCESS: FHDR0001'.
         PERFORM 201-READ-FILE.

        201-READ-FILE.
         DISPLAY 'TRYING TO READ THE FILE'.
         MOVE ZEROS TO CT-01
         MOVE 1 TO CT-02

         OPEN INPUT IN-FL.

         PERFORM 202-READ-NEXT-REC UNTIL CT-02 = 0 OR CT>2.
         CLOSE IN-FL.

        202-READ-NEXT-REC.
         READ IN-FL
          AT END
           DISPLAY 'EOF, CT-02 = 0'
           MOVE ZEROS TO CT-02
          NOT AT END
           PERFORM 203-DISPLAY-REC
         END-READ.
         DISPLAY '     CT-01++'.
         ADD 1 TO CT-01.
        203-DISPLAY-REC.
         DISPLAY ' ' RC-DT-D '/' RC-DT-M '/' RC-DT-Y.
         DISPLAY ' "' RC-DESC-A.
         DISPLAY '  ' RC-DESC-B '"'.

        300-END.
         DISPLAY 'END-PROGRAM: FHDR0001'.
         STOP RUN.
       END PROGRAM FHDR0001.
