      ******************************************************************
      * Author: THIAGO ARCANJO
      * Date: 20220714
      * Purpose: ESTUDAR COBOL - lER ARQUIVO SEQUENCIAL
      * Tectonics: cobc
      ******************************************************************
       IDENTIFICATION DIVISION.
        PROGRAM-ID. FHDR0001.
       ENVIRONMENT DIVISION.
        CONFIGURATION SECTION.

        INPUT-OUTPUT SECTION.
         FILE-CONTROL.
          SELECT IN-FL ASSIGN 'C:\Users\F9329132\operacional\LOG_01.txt'
          ORGANIZATION IS LINE SEQUENTIAL.
      *   SELECT OUT-FL ASSIGN ''.
       DATA DIVISION.
        FILE SECTION.
         FD IN-FL.
          01 RC.
           03 RC-DT.
            04 RC-DT-Y               PIC 9999 VALUE ZEROS.
            04 RC-DT-M               PIC 99   VALUE ZEROS.
            04 RC-DT-D               PIC 99   VALUE ZEROS.
           03 FILLER                 PIC X.
           03 RC-DESC.
            04 RC-DESC-A             PIC X(64).
            04 RC-DESC-B             PIC X(64).

        WORKING-STORAGE SECTION.
         01 CT.
          03 CT-01                   PIC 99  VALUE ZEROS.
          03 CT-02                   PIC 99  VALUE ZEROS.
          03 CT-03                   PIC 99  VALUE ZEROS.
          03 CT-04                   PIC 99  VALUE ZEROS.
          03 CT-001                  PIC 999 VALUE ZEROS.
         01 ARR01 OCCURS 10 TIMES.
          03 IDD                        PIC 99.
          03 RCRD                      PIC X(3).



       PROCEDURE DIVISION.
        000-MAIN.
         DISPLAY 'MAIN: FHDR0001'.
         PERFORM 100-INIT.
         PERFORM 200-PROCESS.
         PERFORM 300-END.
        100-INIT.
         DISPLAY 'INIT: FHDR0001'.

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
         DISPLAY ' ' RC-DT-D '/' RC-DT-M '/' RC-DT-Y '| "' RC-DESC-A.
         DISPLAY '  ' RC-DESC-B '"|'.

        300-END.
         DISPLAY 'END-PROGRAM: FHDR0001'.
         STOP RUN.
       END PROGRAM FHDR0001.
