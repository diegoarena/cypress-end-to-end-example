# README #
this repo contains an example of an end to end tests developed with cypress

### Run the tests ###
Build and run the docker container  
```bash
$ docker-compose up --build -d
```
Run the tests
```bash
$ docker exec -ti cypress-end-to-end-example npx cypress run

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    8.4.1                                                                              │
  │ Browser:    Electron 91 (headless)                                                             │
  │ Specs:      1 found (example.tests.js)                                                         │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  example.tests.js                                                                (1 of 1)

  My First Test
    ✓ Visits the Google page (2744ms)


  1 passing (4s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     4 seconds                                                                        │
  │ Spec Ran:     example.tests.js                                                                 │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: /test/cypress/videos/example.tests.js.mp4                      (0 seconds)


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  example.tests.js                         00:04        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:04        1        1        -        -        -  
```

### Generate the report ###
Soon