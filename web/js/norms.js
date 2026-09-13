/**
 * CAARS Normative Standardization Lookup Tables.
 * Verified Source of Truth (Age x Gender x Form stratified).
 * Dual-environment support: Browser (window.CAARS_NORMS) & Node.js (module.exports).
 */

const CAARS_NORMS = {
  "self": {
    "Male": {
      "18-29": {
        "A": {
          "scale_name": "Inattention / Memory Problems",
          "max_raw": 36,
          "cohort_mean": 14.18,
          "cohort_sd": 6.94,
          "lookup": [
            {
              "raw": 0,
              "t_score": 30,
              "percentile": 2
            },
            {
              "raw": 1,
              "t_score": 31,
              "percentile": 2.9
            },
            {
              "raw": 2,
              "t_score": 32,
              "percentile": 4
            },
            {
              "raw": 3,
              "t_score": 34,
              "percentile": 5.4
            },
            {
              "raw": 4,
              "t_score": 35,
              "percentile": 7.1
            },
            {
              "raw": 5,
              "t_score": 37,
              "percentile": 9.3
            },
            {
              "raw": 6,
              "t_score": 38,
              "percentile": 11.9
            },
            {
              "raw": 7,
              "t_score": 40,
              "percentile": 15
            },
            {
              "raw": 8,
              "t_score": 41,
              "percentile": 18.7
            },
            {
              "raw": 9,
              "t_score": 43,
              "percentile": 22.8
            },
            {
              "raw": 10,
              "t_score": 44,
              "percentile": 27.4
            },
            {
              "raw": 11,
              "t_score": 45,
              "percentile": 32.4
            },
            {
              "raw": 12,
              "t_score": 47,
              "percentile": 37.7
            },
            {
              "raw": 13,
              "t_score": 48,
              "percentile": 43.3
            },
            {
              "raw": 14,
              "t_score": 50,
              "percentile": 49
            },
            {
              "raw": 15,
              "t_score": 51,
              "percentile": 54.7
            },
            {
              "raw": 16,
              "t_score": 53,
              "percentile": 60.4
            },
            {
              "raw": 17,
              "t_score": 54,
              "percentile": 65.8
            },
            {
              "raw": 18,
              "t_score": 56,
              "percentile": 70.9
            },
            {
              "raw": 19,
              "t_score": 57,
              "percentile": 75.7
            },
            {
              "raw": 20,
              "t_score": 58,
              "percentile": 79.9
            },
            {
              "raw": 21,
              "t_score": 60,
              "percentile": 83.7
            },
            {
              "raw": 22,
              "t_score": 61,
              "percentile": 87
            },
            {
              "raw": 23,
              "t_score": 63,
              "percentile": 89.8
            },
            {
              "raw": 24,
              "t_score": 64,
              "percentile": 92.2
            },
            {
              "raw": 25,
              "t_score": 66,
              "percentile": 94.1
            },
            {
              "raw": 26,
              "t_score": 67,
              "percentile": 95.6
            },
            {
              "raw": 27,
              "t_score": 68,
              "percentile": 96.8
            },
            {
              "raw": 28,
              "t_score": 70,
              "percentile": 97.7
            },
            {
              "raw": 29,
              "t_score": 71,
              "percentile": 98.4
            },
            {
              "raw": 30,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 31,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 32,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 33,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 34,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 35,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 81,
              "percentile": 99.9
            }
          ]
        },
        "B": {
          "scale_name": "Hyperactivity / Restlessness",
          "max_raw": 36,
          "cohort_mean": 11.76,
          "cohort_sd": 6.32,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 3.1
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.4
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 6.1
            },
            {
              "raw": 3,
              "t_score": 36,
              "percentile": 8.3
            },
            {
              "raw": 4,
              "t_score": 38,
              "percentile": 11
            },
            {
              "raw": 5,
              "t_score": 39,
              "percentile": 14.3
            },
            {
              "raw": 6,
              "t_score": 41,
              "percentile": 18.1
            },
            {
              "raw": 7,
              "t_score": 42,
              "percentile": 22.6
            },
            {
              "raw": 8,
              "t_score": 44,
              "percentile": 27.6
            },
            {
              "raw": 9,
              "t_score": 46,
              "percentile": 33.1
            },
            {
              "raw": 10,
              "t_score": 47,
              "percentile": 39
            },
            {
              "raw": 11,
              "t_score": 49,
              "percentile": 45.2
            },
            {
              "raw": 12,
              "t_score": 50,
              "percentile": 51.5
            },
            {
              "raw": 13,
              "t_score": 52,
              "percentile": 57.8
            },
            {
              "raw": 14,
              "t_score": 54,
              "percentile": 63.8
            },
            {
              "raw": 15,
              "t_score": 55,
              "percentile": 69.6
            },
            {
              "raw": 16,
              "t_score": 57,
              "percentile": 74.9
            },
            {
              "raw": 17,
              "t_score": 58,
              "percentile": 79.6
            },
            {
              "raw": 18,
              "t_score": 60,
              "percentile": 83.8
            },
            {
              "raw": 19,
              "t_score": 61,
              "percentile": 87.4
            },
            {
              "raw": 20,
              "t_score": 63,
              "percentile": 90.4
            },
            {
              "raw": 21,
              "t_score": 65,
              "percentile": 92.8
            },
            {
              "raw": 22,
              "t_score": 66,
              "percentile": 94.7
            },
            {
              "raw": 23,
              "t_score": 68,
              "percentile": 96.2
            },
            {
              "raw": 24,
              "t_score": 69,
              "percentile": 97.4
            },
            {
              "raw": 25,
              "t_score": 71,
              "percentile": 98.2
            },
            {
              "raw": 26,
              "t_score": 73,
              "percentile": 98.8
            },
            {
              "raw": 27,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 28,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 29,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 30,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 31,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 88,
              "percentile": 99.9
            }
          ]
        },
        "C": {
          "scale_name": "Impulsivity / Emotional Lability",
          "max_raw": 36,
          "cohort_mean": 12.71,
          "cohort_sd": 6.63,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 2.8
            },
            {
              "raw": 1,
              "t_score": 32,
              "percentile": 3.9
            },
            {
              "raw": 2,
              "t_score": 34,
              "percentile": 5.3
            },
            {
              "raw": 3,
              "t_score": 35,
              "percentile": 7.2
            },
            {
              "raw": 4,
              "t_score": 37,
              "percentile": 9.5
            },
            {
              "raw": 5,
              "t_score": 38,
              "percentile": 12.3
            },
            {
              "raw": 6,
              "t_score": 40,
              "percentile": 15.6
            },
            {
              "raw": 7,
              "t_score": 41,
              "percentile": 19.5
            },
            {
              "raw": 8,
              "t_score": 43,
              "percentile": 23.9
            },
            {
              "raw": 9,
              "t_score": 44,
              "percentile": 28.8
            },
            {
              "raw": 10,
              "t_score": 46,
              "percentile": 34.2
            },
            {
              "raw": 11,
              "t_score": 47,
              "percentile": 39.9
            },
            {
              "raw": 12,
              "t_score": 49,
              "percentile": 45.8
            },
            {
              "raw": 13,
              "t_score": 50,
              "percentile": 51.8
            },
            {
              "raw": 14,
              "t_score": 52,
              "percentile": 57.7
            },
            {
              "raw": 15,
              "t_score": 53,
              "percentile": 63.5
            },
            {
              "raw": 16,
              "t_score": 55,
              "percentile": 69
            },
            {
              "raw": 17,
              "t_score": 56,
              "percentile": 74.1
            },
            {
              "raw": 18,
              "t_score": 58,
              "percentile": 78.8
            },
            {
              "raw": 19,
              "t_score": 59,
              "percentile": 82.9
            },
            {
              "raw": 20,
              "t_score": 61,
              "percentile": 86.4
            },
            {
              "raw": 21,
              "t_score": 63,
              "percentile": 89.5
            },
            {
              "raw": 22,
              "t_score": 64,
              "percentile": 92
            },
            {
              "raw": 23,
              "t_score": 66,
              "percentile": 94
            },
            {
              "raw": 24,
              "t_score": 67,
              "percentile": 95.6
            },
            {
              "raw": 25,
              "t_score": 69,
              "percentile": 96.8
            },
            {
              "raw": 26,
              "t_score": 70,
              "percentile": 97.8
            },
            {
              "raw": 27,
              "t_score": 72,
              "percentile": 98.4
            },
            {
              "raw": 28,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 29,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 30,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 31,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 32,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 33,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 85,
              "percentile": 99.9
            }
          ]
        },
        "D": {
          "scale_name": "Problems with Self-Concept",
          "max_raw": 36,
          "cohort_mean": 10.29,
          "cohort_sd": 6.02,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.4
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 6.1
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 8.4
            },
            {
              "raw": 3,
              "t_score": 38,
              "percentile": 11.3
            },
            {
              "raw": 4,
              "t_score": 40,
              "percentile": 14.8
            },
            {
              "raw": 5,
              "t_score": 41,
              "percentile": 19
            },
            {
              "raw": 6,
              "t_score": 43,
              "percentile": 23.8
            },
            {
              "raw": 7,
              "t_score": 45,
              "percentile": 29.2
            },
            {
              "raw": 8,
              "t_score": 46,
              "percentile": 35.2
            },
            {
              "raw": 9,
              "t_score": 48,
              "percentile": 41.5
            },
            {
              "raw": 10,
              "t_score": 50,
              "percentile": 48.1
            },
            {
              "raw": 11,
              "t_score": 51,
              "percentile": 54.7
            },
            {
              "raw": 12,
              "t_score": 53,
              "percentile": 61.2
            },
            {
              "raw": 13,
              "t_score": 55,
              "percentile": 67.4
            },
            {
              "raw": 14,
              "t_score": 56,
              "percentile": 73.1
            },
            {
              "raw": 15,
              "t_score": 58,
              "percentile": 78.3
            },
            {
              "raw": 16,
              "t_score": 59,
              "percentile": 82.9
            },
            {
              "raw": 17,
              "t_score": 61,
              "percentile": 86.8
            },
            {
              "raw": 18,
              "t_score": 63,
              "percentile": 90
            },
            {
              "raw": 19,
              "t_score": 64,
              "percentile": 92.6
            },
            {
              "raw": 20,
              "t_score": 66,
              "percentile": 94.7
            },
            {
              "raw": 21,
              "t_score": 68,
              "percentile": 96.2
            },
            {
              "raw": 22,
              "t_score": 69,
              "percentile": 97.4
            },
            {
              "raw": 23,
              "t_score": 71,
              "percentile": 98.3
            },
            {
              "raw": 24,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 25,
              "t_score": 74,
              "percentile": 99.3
            },
            {
              "raw": 26,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 27,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 28,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 29,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "E": {
          "scale_name": "DSM Inattentive Symptoms",
          "max_raw": 27,
          "cohort_mean": 10.92,
          "cohort_sd": 5.61,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 2.6
            },
            {
              "raw": 1,
              "t_score": 32,
              "percentile": 3.9
            },
            {
              "raw": 2,
              "t_score": 34,
              "percentile": 5.6
            },
            {
              "raw": 3,
              "t_score": 36,
              "percentile": 7.9
            },
            {
              "raw": 4,
              "t_score": 38,
              "percentile": 10.9
            },
            {
              "raw": 5,
              "t_score": 39,
              "percentile": 14.6
            },
            {
              "raw": 6,
              "t_score": 41,
              "percentile": 19
            },
            {
              "raw": 7,
              "t_score": 43,
              "percentile": 24.2
            },
            {
              "raw": 8,
              "t_score": 45,
              "percentile": 30.1
            },
            {
              "raw": 9,
              "t_score": 47,
              "percentile": 36.6
            },
            {
              "raw": 10,
              "t_score": 48,
              "percentile": 43.5
            },
            {
              "raw": 11,
              "t_score": 50,
              "percentile": 50.6
            },
            {
              "raw": 12,
              "t_score": 52,
              "percentile": 57.6
            },
            {
              "raw": 13,
              "t_score": 54,
              "percentile": 64.5
            },
            {
              "raw": 14,
              "t_score": 55,
              "percentile": 70.9
            },
            {
              "raw": 15,
              "t_score": 57,
              "percentile": 76.6
            },
            {
              "raw": 16,
              "t_score": 59,
              "percentile": 81.7
            },
            {
              "raw": 17,
              "t_score": 61,
              "percentile": 86.1
            },
            {
              "raw": 18,
              "t_score": 63,
              "percentile": 89.7
            },
            {
              "raw": 19,
              "t_score": 64,
              "percentile": 92.5
            },
            {
              "raw": 20,
              "t_score": 66,
              "percentile": 94.7
            },
            {
              "raw": 21,
              "t_score": 68,
              "percentile": 96.4
            },
            {
              "raw": 22,
              "t_score": 70,
              "percentile": 97.6
            },
            {
              "raw": 23,
              "t_score": 72,
              "percentile": 98.4
            },
            {
              "raw": 24,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 25,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 26,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 27,
              "t_score": 79,
              "percentile": 99.8
            }
          ]
        },
        "F": {
          "scale_name": "DSM Hyperactive-Impulsive Symptoms",
          "max_raw": 27,
          "cohort_mean": 9.35,
          "cohort_sd": 5.2,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.6
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 5.4
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 7.9
            },
            {
              "raw": 3,
              "t_score": 38,
              "percentile": 11.1
            },
            {
              "raw": 4,
              "t_score": 40,
              "percentile": 15.2
            },
            {
              "raw": 5,
              "t_score": 42,
              "percentile": 20.2
            },
            {
              "raw": 6,
              "t_score": 44,
              "percentile": 26
            },
            {
              "raw": 7,
              "t_score": 45,
              "percentile": 32.6
            },
            {
              "raw": 8,
              "t_score": 47,
              "percentile": 39.8
            },
            {
              "raw": 9,
              "t_score": 49,
              "percentile": 47.4
            },
            {
              "raw": 10,
              "t_score": 51,
              "percentile": 55
            },
            {
              "raw": 11,
              "t_score": 53,
              "percentile": 62.5
            },
            {
              "raw": 12,
              "t_score": 55,
              "percentile": 69.5
            },
            {
              "raw": 13,
              "t_score": 57,
              "percentile": 75.9
            },
            {
              "raw": 14,
              "t_score": 59,
              "percentile": 81.5
            },
            {
              "raw": 15,
              "t_score": 61,
              "percentile": 86.1
            },
            {
              "raw": 16,
              "t_score": 63,
              "percentile": 90
            },
            {
              "raw": 17,
              "t_score": 65,
              "percentile": 92.9
            },
            {
              "raw": 18,
              "t_score": 67,
              "percentile": 95.2
            },
            {
              "raw": 19,
              "t_score": 69,
              "percentile": 96.8
            },
            {
              "raw": 20,
              "t_score": 70,
              "percentile": 98
            },
            {
              "raw": 21,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 22,
              "t_score": 74,
              "percentile": 99.3
            },
            {
              "raw": 23,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 24,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 25,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 26,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 84,
              "percentile": 99.9
            }
          ]
        },
        "G": {
          "scale_name": "Total ADHD Symptoms",
          "max_raw": 54,
          "cohort_mean": 20.27,
          "cohort_sd": 10,
          "lookup": [
            {
              "raw": 0,
              "t_score": 30,
              "percentile": 2.1
            },
            {
              "raw": 1,
              "t_score": 31,
              "percentile": 2.7
            },
            {
              "raw": 2,
              "t_score": 32,
              "percentile": 3.4
            },
            {
              "raw": 3,
              "t_score": 33,
              "percentile": 4.2
            },
            {
              "raw": 4,
              "t_score": 34,
              "percentile": 5.2
            },
            {
              "raw": 5,
              "t_score": 35,
              "percentile": 6.3
            },
            {
              "raw": 6,
              "t_score": 36,
              "percentile": 7.7
            },
            {
              "raw": 7,
              "t_score": 37,
              "percentile": 9.2
            },
            {
              "raw": 8,
              "t_score": 38,
              "percentile": 11
            },
            {
              "raw": 9,
              "t_score": 39,
              "percentile": 13
            },
            {
              "raw": 10,
              "t_score": 40,
              "percentile": 15.2
            },
            {
              "raw": 11,
              "t_score": 41,
              "percentile": 17.7
            },
            {
              "raw": 12,
              "t_score": 42,
              "percentile": 20.4
            },
            {
              "raw": 13,
              "t_score": 43,
              "percentile": 23.4
            },
            {
              "raw": 14,
              "t_score": 44,
              "percentile": 26.5
            },
            {
              "raw": 15,
              "t_score": 45,
              "percentile": 29.9
            },
            {
              "raw": 16,
              "t_score": 46,
              "percentile": 33.5
            },
            {
              "raw": 17,
              "t_score": 47,
              "percentile": 37.2
            },
            {
              "raw": 18,
              "t_score": 48,
              "percentile": 41
            },
            {
              "raw": 19,
              "t_score": 49,
              "percentile": 45
            },
            {
              "raw": 20,
              "t_score": 50,
              "percentile": 48.9
            },
            {
              "raw": 21,
              "t_score": 51,
              "percentile": 52.9
            },
            {
              "raw": 22,
              "t_score": 52,
              "percentile": 56.9
            },
            {
              "raw": 23,
              "t_score": 53,
              "percentile": 60.8
            },
            {
              "raw": 24,
              "t_score": 54,
              "percentile": 64.6
            },
            {
              "raw": 25,
              "t_score": 55,
              "percentile": 68.2
            },
            {
              "raw": 26,
              "t_score": 56,
              "percentile": 71.7
            },
            {
              "raw": 27,
              "t_score": 57,
              "percentile": 75
            },
            {
              "raw": 28,
              "t_score": 58,
              "percentile": 78
            },
            {
              "raw": 29,
              "t_score": 59,
              "percentile": 80.9
            },
            {
              "raw": 30,
              "t_score": 60,
              "percentile": 83.5
            },
            {
              "raw": 31,
              "t_score": 61,
              "percentile": 85.9
            },
            {
              "raw": 32,
              "t_score": 62,
              "percentile": 88
            },
            {
              "raw": 33,
              "t_score": 63,
              "percentile": 89.9
            },
            {
              "raw": 34,
              "t_score": 64,
              "percentile": 91.5
            },
            {
              "raw": 35,
              "t_score": 65,
              "percentile": 93
            },
            {
              "raw": 36,
              "t_score": 66,
              "percentile": 94.2
            },
            {
              "raw": 37,
              "t_score": 67,
              "percentile": 95.3
            },
            {
              "raw": 38,
              "t_score": 68,
              "percentile": 96.2
            },
            {
              "raw": 39,
              "t_score": 69,
              "percentile": 97
            },
            {
              "raw": 40,
              "t_score": 70,
              "percentile": 97.6
            },
            {
              "raw": 41,
              "t_score": 71,
              "percentile": 98.1
            },
            {
              "raw": 42,
              "t_score": 72,
              "percentile": 98.5
            },
            {
              "raw": 43,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 44,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 45,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 46,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 47,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 48,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 49,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 50,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 51,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 52,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 53,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 54,
              "t_score": 84,
              "percentile": 99.9
            }
          ]
        },
        "H": {
          "scale_name": "ADHD Index",
          "max_raw": 36,
          "cohort_mean": 13.44,
          "cohort_sd": 6.53,
          "lookup": [
            {
              "raw": 0,
              "t_score": 30,
              "percentile": 2
            },
            {
              "raw": 1,
              "t_score": 31,
              "percentile": 2.8
            },
            {
              "raw": 2,
              "t_score": 32,
              "percentile": 4
            },
            {
              "raw": 3,
              "t_score": 34,
              "percentile": 5.5
            },
            {
              "raw": 4,
              "t_score": 36,
              "percentile": 7.4
            },
            {
              "raw": 5,
              "t_score": 37,
              "percentile": 9.8
            },
            {
              "raw": 6,
              "t_score": 39,
              "percentile": 12.7
            },
            {
              "raw": 7,
              "t_score": 40,
              "percentile": 16.2
            },
            {
              "raw": 8,
              "t_score": 42,
              "percentile": 20.2
            },
            {
              "raw": 9,
              "t_score": 43,
              "percentile": 24.8
            },
            {
              "raw": 10,
              "t_score": 45,
              "percentile": 29.9
            },
            {
              "raw": 11,
              "t_score": 46,
              "percentile": 35.4
            },
            {
              "raw": 12,
              "t_score": 48,
              "percentile": 41.3
            },
            {
              "raw": 13,
              "t_score": 49,
              "percentile": 47.3
            },
            {
              "raw": 14,
              "t_score": 51,
              "percentile": 53.4
            },
            {
              "raw": 15,
              "t_score": 52,
              "percentile": 59.4
            },
            {
              "raw": 16,
              "t_score": 54,
              "percentile": 65.3
            },
            {
              "raw": 17,
              "t_score": 55,
              "percentile": 70.7
            },
            {
              "raw": 18,
              "t_score": 57,
              "percentile": 75.8
            },
            {
              "raw": 19,
              "t_score": 59,
              "percentile": 80.3
            },
            {
              "raw": 20,
              "t_score": 60,
              "percentile": 84.3
            },
            {
              "raw": 21,
              "t_score": 62,
              "percentile": 87.7
            },
            {
              "raw": 22,
              "t_score": 63,
              "percentile": 90.5
            },
            {
              "raw": 23,
              "t_score": 65,
              "percentile": 92.8
            },
            {
              "raw": 24,
              "t_score": 66,
              "percentile": 94.7
            },
            {
              "raw": 25,
              "t_score": 68,
              "percentile": 96.2
            },
            {
              "raw": 26,
              "t_score": 69,
              "percentile": 97.3
            },
            {
              "raw": 27,
              "t_score": 71,
              "percentile": 98.1
            },
            {
              "raw": 28,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 29,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 30,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 31,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 32,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 33,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 85,
              "percentile": 99.9
            }
          ]
        }
      },
      "30-49": {
        "A": {
          "scale_name": "Inattention / Memory Problems",
          "max_raw": 36,
          "cohort_mean": 13.5,
          "cohort_sd": 6.8,
          "lookup": [
            {
              "raw": 0,
              "t_score": 30,
              "percentile": 2.4
            },
            {
              "raw": 1,
              "t_score": 32,
              "percentile": 3.3
            },
            {
              "raw": 2,
              "t_score": 33,
              "percentile": 4.5
            },
            {
              "raw": 3,
              "t_score": 35,
              "percentile": 6.1
            },
            {
              "raw": 4,
              "t_score": 36,
              "percentile": 8.1
            },
            {
              "raw": 5,
              "t_score": 38,
              "percentile": 10.6
            },
            {
              "raw": 6,
              "t_score": 39,
              "percentile": 13.5
            },
            {
              "raw": 7,
              "t_score": 40,
              "percentile": 17
            },
            {
              "raw": 8,
              "t_score": 42,
              "percentile": 20.9
            },
            {
              "raw": 9,
              "t_score": 43,
              "percentile": 25.4
            },
            {
              "raw": 10,
              "t_score": 45,
              "percentile": 30.3
            },
            {
              "raw": 11,
              "t_score": 46,
              "percentile": 35.7
            },
            {
              "raw": 12,
              "t_score": 48,
              "percentile": 41.3
            },
            {
              "raw": 13,
              "t_score": 49,
              "percentile": 47.1
            },
            {
              "raw": 14,
              "t_score": 51,
              "percentile": 52.9
            },
            {
              "raw": 15,
              "t_score": 52,
              "percentile": 58.7
            },
            {
              "raw": 16,
              "t_score": 54,
              "percentile": 64.3
            },
            {
              "raw": 17,
              "t_score": 55,
              "percentile": 69.7
            },
            {
              "raw": 18,
              "t_score": 57,
              "percentile": 74.6
            },
            {
              "raw": 19,
              "t_score": 58,
              "percentile": 79.1
            },
            {
              "raw": 20,
              "t_score": 60,
              "percentile": 83
            },
            {
              "raw": 21,
              "t_score": 61,
              "percentile": 86.5
            },
            {
              "raw": 22,
              "t_score": 62,
              "percentile": 89.4
            },
            {
              "raw": 23,
              "t_score": 64,
              "percentile": 91.9
            },
            {
              "raw": 24,
              "t_score": 65,
              "percentile": 93.9
            },
            {
              "raw": 25,
              "t_score": 67,
              "percentile": 95.5
            },
            {
              "raw": 26,
              "t_score": 68,
              "percentile": 96.7
            },
            {
              "raw": 27,
              "t_score": 70,
              "percentile": 97.6
            },
            {
              "raw": 28,
              "t_score": 71,
              "percentile": 98.4
            },
            {
              "raw": 29,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 30,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 31,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 32,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 33,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 34,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 83,
              "percentile": 99.9
            }
          ]
        },
        "B": {
          "scale_name": "Hyperactivity / Restlessness",
          "max_raw": 36,
          "cohort_mean": 11.2,
          "cohort_sd": 6.2,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.5
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 5
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 6.9
            },
            {
              "raw": 3,
              "t_score": 37,
              "percentile": 9.3
            },
            {
              "raw": 4,
              "t_score": 38,
              "percentile": 12.3
            },
            {
              "raw": 5,
              "t_score": 40,
              "percentile": 15.9
            },
            {
              "raw": 6,
              "t_score": 42,
              "percentile": 20.1
            },
            {
              "raw": 7,
              "t_score": 43,
              "percentile": 24.9
            },
            {
              "raw": 8,
              "t_score": 45,
              "percentile": 30.3
            },
            {
              "raw": 9,
              "t_score": 46,
              "percentile": 36.1
            },
            {
              "raw": 10,
              "t_score": 48,
              "percentile": 42.3
            },
            {
              "raw": 11,
              "t_score": 50,
              "percentile": 48.7
            },
            {
              "raw": 12,
              "t_score": 51,
              "percentile": 55.1
            },
            {
              "raw": 13,
              "t_score": 53,
              "percentile": 61.4
            },
            {
              "raw": 14,
              "t_score": 55,
              "percentile": 67.4
            },
            {
              "raw": 15,
              "t_score": 56,
              "percentile": 73
            },
            {
              "raw": 16,
              "t_score": 58,
              "percentile": 78.1
            },
            {
              "raw": 17,
              "t_score": 59,
              "percentile": 82.5
            },
            {
              "raw": 18,
              "t_score": 61,
              "percentile": 86.4
            },
            {
              "raw": 19,
              "t_score": 63,
              "percentile": 89.6
            },
            {
              "raw": 20,
              "t_score": 64,
              "percentile": 92.2
            },
            {
              "raw": 21,
              "t_score": 66,
              "percentile": 94.3
            },
            {
              "raw": 22,
              "t_score": 67,
              "percentile": 95.9
            },
            {
              "raw": 23,
              "t_score": 69,
              "percentile": 97.1
            },
            {
              "raw": 24,
              "t_score": 71,
              "percentile": 98.1
            },
            {
              "raw": 25,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 26,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 27,
              "t_score": 75,
              "percentile": 99.5
            },
            {
              "raw": 28,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 29,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 30,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "C": {
          "scale_name": "Impulsivity / Emotional Lability",
          "max_raw": 36,
          "cohort_mean": 12.1,
          "cohort_sd": 6.5,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 3.1
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.4
            },
            {
              "raw": 2,
              "t_score": 34,
              "percentile": 6
            },
            {
              "raw": 3,
              "t_score": 36,
              "percentile": 8.1
            },
            {
              "raw": 4,
              "t_score": 38,
              "percentile": 10.6
            },
            {
              "raw": 5,
              "t_score": 39,
              "percentile": 13.7
            },
            {
              "raw": 6,
              "t_score": 41,
              "percentile": 17.4
            },
            {
              "raw": 7,
              "t_score": 42,
              "percentile": 21.6
            },
            {
              "raw": 8,
              "t_score": 44,
              "percentile": 26.4
            },
            {
              "raw": 9,
              "t_score": 45,
              "percentile": 31.7
            },
            {
              "raw": 10,
              "t_score": 47,
              "percentile": 37.3
            },
            {
              "raw": 11,
              "t_score": 48,
              "percentile": 43.3
            },
            {
              "raw": 12,
              "t_score": 50,
              "percentile": 49.4
            },
            {
              "raw": 13,
              "t_score": 51,
              "percentile": 55.5
            },
            {
              "raw": 14,
              "t_score": 53,
              "percentile": 61.5
            },
            {
              "raw": 15,
              "t_score": 54,
              "percentile": 67.2
            },
            {
              "raw": 16,
              "t_score": 56,
              "percentile": 72.6
            },
            {
              "raw": 17,
              "t_score": 58,
              "percentile": 77.5
            },
            {
              "raw": 18,
              "t_score": 59,
              "percentile": 81.8
            },
            {
              "raw": 19,
              "t_score": 61,
              "percentile": 85.6
            },
            {
              "raw": 20,
              "t_score": 62,
              "percentile": 88.8
            },
            {
              "raw": 21,
              "t_score": 64,
              "percentile": 91.5
            },
            {
              "raw": 22,
              "t_score": 65,
              "percentile": 93.6
            },
            {
              "raw": 23,
              "t_score": 67,
              "percentile": 95.3
            },
            {
              "raw": 24,
              "t_score": 68,
              "percentile": 96.6
            },
            {
              "raw": 25,
              "t_score": 70,
              "percentile": 97.6
            },
            {
              "raw": 26,
              "t_score": 71,
              "percentile": 98.4
            },
            {
              "raw": 27,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 28,
              "t_score": 74,
              "percentile": 99.3
            },
            {
              "raw": 29,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 30,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 31,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 32,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 87,
              "percentile": 99.9
            }
          ]
        },
        "D": {
          "scale_name": "Problems with Self-Concept",
          "max_raw": 36,
          "cohort_mean": 9.8,
          "cohort_sd": 5.9,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.8
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 6.8
            },
            {
              "raw": 2,
              "t_score": 37,
              "percentile": 9.3
            },
            {
              "raw": 3,
              "t_score": 38,
              "percentile": 12.5
            },
            {
              "raw": 4,
              "t_score": 40,
              "percentile": 16.3
            },
            {
              "raw": 5,
              "t_score": 42,
              "percentile": 20.8
            },
            {
              "raw": 6,
              "t_score": 44,
              "percentile": 26
            },
            {
              "raw": 7,
              "t_score": 45,
              "percentile": 31.8
            },
            {
              "raw": 8,
              "t_score": 47,
              "percentile": 38
            },
            {
              "raw": 9,
              "t_score": 49,
              "percentile": 44.6
            },
            {
              "raw": 10,
              "t_score": 50,
              "percentile": 51.4
            },
            {
              "raw": 11,
              "t_score": 52,
              "percentile": 58.1
            },
            {
              "raw": 12,
              "t_score": 54,
              "percentile": 64.5
            },
            {
              "raw": 13,
              "t_score": 55,
              "percentile": 70.6
            },
            {
              "raw": 14,
              "t_score": 57,
              "percentile": 76.2
            },
            {
              "raw": 15,
              "t_score": 59,
              "percentile": 81.1
            },
            {
              "raw": 16,
              "t_score": 61,
              "percentile": 85.3
            },
            {
              "raw": 17,
              "t_score": 62,
              "percentile": 88.9
            },
            {
              "raw": 18,
              "t_score": 64,
              "percentile": 91.8
            },
            {
              "raw": 19,
              "t_score": 66,
              "percentile": 94.1
            },
            {
              "raw": 20,
              "t_score": 67,
              "percentile": 95.8
            },
            {
              "raw": 21,
              "t_score": 69,
              "percentile": 97.1
            },
            {
              "raw": 22,
              "t_score": 71,
              "percentile": 98.1
            },
            {
              "raw": 23,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 24,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 25,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 26,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 27,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 28,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 29,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "E": {
          "scale_name": "DSM Inattentive Symptoms",
          "max_raw": 27,
          "cohort_mean": 10.4,
          "cohort_sd": 5.5,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 2.9
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.4
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 6.3
            },
            {
              "raw": 3,
              "t_score": 37,
              "percentile": 8.9
            },
            {
              "raw": 4,
              "t_score": 38,
              "percentile": 12.2
            },
            {
              "raw": 5,
              "t_score": 40,
              "percentile": 16.3
            },
            {
              "raw": 6,
              "t_score": 42,
              "percentile": 21.2
            },
            {
              "raw": 7,
              "t_score": 44,
              "percentile": 26.8
            },
            {
              "raw": 8,
              "t_score": 46,
              "percentile": 33.1
            },
            {
              "raw": 9,
              "t_score": 47,
              "percentile": 40
            },
            {
              "raw": 10,
              "t_score": 49,
              "percentile": 47.1
            },
            {
              "raw": 11,
              "t_score": 51,
              "percentile": 54.3
            },
            {
              "raw": 12,
              "t_score": 53,
              "percentile": 61.4
            },
            {
              "raw": 13,
              "t_score": 55,
              "percentile": 68.2
            },
            {
              "raw": 14,
              "t_score": 57,
              "percentile": 74.4
            },
            {
              "raw": 15,
              "t_score": 58,
              "percentile": 79.9
            },
            {
              "raw": 16,
              "t_score": 60,
              "percentile": 84.6
            },
            {
              "raw": 17,
              "t_score": 62,
              "percentile": 88.5
            },
            {
              "raw": 18,
              "t_score": 64,
              "percentile": 91.6
            },
            {
              "raw": 19,
              "t_score": 66,
              "percentile": 94.1
            },
            {
              "raw": 20,
              "t_score": 67,
              "percentile": 96
            },
            {
              "raw": 21,
              "t_score": 69,
              "percentile": 97.3
            },
            {
              "raw": 22,
              "t_score": 71,
              "percentile": 98.3
            },
            {
              "raw": 23,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 24,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 25,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 26,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 27,
              "t_score": 80,
              "percentile": 99.9
            }
          ]
        },
        "F": {
          "scale_name": "DSM Hyperactive-Impulsive Symptoms",
          "max_raw": 27,
          "cohort_mean": 8.9,
          "cohort_sd": 5.1,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 6.1
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 8.8
            },
            {
              "raw": 3,
              "t_score": 38,
              "percentile": 12.4
            },
            {
              "raw": 4,
              "t_score": 40,
              "percentile": 16.8
            },
            {
              "raw": 5,
              "t_score": 42,
              "percentile": 22.2
            },
            {
              "raw": 6,
              "t_score": 44,
              "percentile": 28.5
            },
            {
              "raw": 7,
              "t_score": 46,
              "percentile": 35.5
            },
            {
              "raw": 8,
              "t_score": 48,
              "percentile": 43
            },
            {
              "raw": 9,
              "t_score": 50,
              "percentile": 50.8
            },
            {
              "raw": 10,
              "t_score": 52,
              "percentile": 58.5
            },
            {
              "raw": 11,
              "t_score": 54,
              "percentile": 66
            },
            {
              "raw": 12,
              "t_score": 56,
              "percentile": 72.8
            },
            {
              "raw": 13,
              "t_score": 58,
              "percentile": 78.9
            },
            {
              "raw": 14,
              "t_score": 60,
              "percentile": 84.1
            },
            {
              "raw": 15,
              "t_score": 62,
              "percentile": 88.4
            },
            {
              "raw": 16,
              "t_score": 64,
              "percentile": 91.8
            },
            {
              "raw": 17,
              "t_score": 66,
              "percentile": 94.4
            },
            {
              "raw": 18,
              "t_score": 68,
              "percentile": 96.3
            },
            {
              "raw": 19,
              "t_score": 70,
              "percentile": 97.6
            },
            {
              "raw": 20,
              "t_score": 72,
              "percentile": 98.5
            },
            {
              "raw": 21,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 22,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 23,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 24,
              "t_score": 80,
              "percentile": 99.8
            },
            {
              "raw": 25,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 26,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 85,
              "percentile": 99.9
            }
          ]
        },
        "G": {
          "scale_name": "Total ADHD Symptoms",
          "max_raw": 54,
          "cohort_mean": 19.3,
          "cohort_sd": 9.8,
          "lookup": [
            {
              "raw": 0,
              "t_score": 30,
              "percentile": 2.4
            },
            {
              "raw": 1,
              "t_score": 31,
              "percentile": 3.1
            },
            {
              "raw": 2,
              "t_score": 32,
              "percentile": 3.9
            },
            {
              "raw": 3,
              "t_score": 33,
              "percentile": 4.8
            },
            {
              "raw": 4,
              "t_score": 34,
              "percentile": 5.9
            },
            {
              "raw": 5,
              "t_score": 35,
              "percentile": 7.2
            },
            {
              "raw": 6,
              "t_score": 36,
              "percentile": 8.7
            },
            {
              "raw": 7,
              "t_score": 37,
              "percentile": 10.5
            },
            {
              "raw": 8,
              "t_score": 38,
              "percentile": 12.4
            },
            {
              "raw": 9,
              "t_score": 39,
              "percentile": 14.7
            },
            {
              "raw": 10,
              "t_score": 41,
              "percentile": 17.1
            },
            {
              "raw": 11,
              "t_score": 42,
              "percentile": 19.9
            },
            {
              "raw": 12,
              "t_score": 43,
              "percentile": 22.8
            },
            {
              "raw": 13,
              "t_score": 44,
              "percentile": 26
            },
            {
              "raw": 14,
              "t_score": 45,
              "percentile": 29.4
            },
            {
              "raw": 15,
              "t_score": 46,
              "percentile": 33
            },
            {
              "raw": 16,
              "t_score": 47,
              "percentile": 36.8
            },
            {
              "raw": 17,
              "t_score": 48,
              "percentile": 40.7
            },
            {
              "raw": 18,
              "t_score": 49,
              "percentile": 44.7
            },
            {
              "raw": 19,
              "t_score": 50,
              "percentile": 48.8
            },
            {
              "raw": 20,
              "t_score": 51,
              "percentile": 52.8
            },
            {
              "raw": 21,
              "t_score": 52,
              "percentile": 56.9
            },
            {
              "raw": 22,
              "t_score": 53,
              "percentile": 60.9
            },
            {
              "raw": 23,
              "t_score": 54,
              "percentile": 64.7
            },
            {
              "raw": 24,
              "t_score": 55,
              "percentile": 68.4
            },
            {
              "raw": 25,
              "t_score": 56,
              "percentile": 72
            },
            {
              "raw": 26,
              "t_score": 57,
              "percentile": 75.3
            },
            {
              "raw": 27,
              "t_score": 58,
              "percentile": 78.4
            },
            {
              "raw": 28,
              "t_score": 59,
              "percentile": 81.3
            },
            {
              "raw": 29,
              "t_score": 60,
              "percentile": 83.9
            },
            {
              "raw": 30,
              "t_score": 61,
              "percentile": 86.3
            },
            {
              "raw": 31,
              "t_score": 62,
              "percentile": 88.4
            },
            {
              "raw": 32,
              "t_score": 63,
              "percentile": 90.2
            },
            {
              "raw": 33,
              "t_score": 64,
              "percentile": 91.9
            },
            {
              "raw": 34,
              "t_score": 65,
              "percentile": 93.3
            },
            {
              "raw": 35,
              "t_score": 66,
              "percentile": 94.5
            },
            {
              "raw": 36,
              "t_score": 67,
              "percentile": 95.6
            },
            {
              "raw": 37,
              "t_score": 68,
              "percentile": 96.5
            },
            {
              "raw": 38,
              "t_score": 69,
              "percentile": 97.2
            },
            {
              "raw": 39,
              "t_score": 70,
              "percentile": 97.8
            },
            {
              "raw": 40,
              "t_score": 71,
              "percentile": 98.3
            },
            {
              "raw": 41,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 42,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 43,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 44,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 45,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 46,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 47,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 48,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 49,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 50,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 51,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 52,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 53,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 54,
              "t_score": 85,
              "percentile": 99.9
            }
          ]
        },
        "H": {
          "scale_name": "ADHD Index",
          "max_raw": 36,
          "cohort_mean": 12.8,
          "cohort_sd": 6.4,
          "lookup": [
            {
              "raw": 0,
              "t_score": 30,
              "percentile": 2.3
            },
            {
              "raw": 1,
              "t_score": 32,
              "percentile": 3.3
            },
            {
              "raw": 2,
              "t_score": 33,
              "percentile": 4.6
            },
            {
              "raw": 3,
              "t_score": 35,
              "percentile": 6.3
            },
            {
              "raw": 4,
              "t_score": 36,
              "percentile": 8.5
            },
            {
              "raw": 5,
              "t_score": 38,
              "percentile": 11.1
            },
            {
              "raw": 6,
              "t_score": 39,
              "percentile": 14.4
            },
            {
              "raw": 7,
              "t_score": 41,
              "percentile": 18.2
            },
            {
              "raw": 8,
              "t_score": 42,
              "percentile": 22.7
            },
            {
              "raw": 9,
              "t_score": 44,
              "percentile": 27.6
            },
            {
              "raw": 10,
              "t_score": 46,
              "percentile": 33.1
            },
            {
              "raw": 11,
              "t_score": 47,
              "percentile": 38.9
            },
            {
              "raw": 12,
              "t_score": 49,
              "percentile": 45
            },
            {
              "raw": 13,
              "t_score": 50,
              "percentile": 51.2
            },
            {
              "raw": 14,
              "t_score": 52,
              "percentile": 57.4
            },
            {
              "raw": 15,
              "t_score": 53,
              "percentile": 63.4
            },
            {
              "raw": 16,
              "t_score": 55,
              "percentile": 69.1
            },
            {
              "raw": 17,
              "t_score": 57,
              "percentile": 74.4
            },
            {
              "raw": 18,
              "t_score": 58,
              "percentile": 79.2
            },
            {
              "raw": 19,
              "t_score": 60,
              "percentile": 83.4
            },
            {
              "raw": 20,
              "t_score": 61,
              "percentile": 87
            },
            {
              "raw": 21,
              "t_score": 63,
              "percentile": 90
            },
            {
              "raw": 22,
              "t_score": 64,
              "percentile": 92.5
            },
            {
              "raw": 23,
              "t_score": 66,
              "percentile": 94.5
            },
            {
              "raw": 24,
              "t_score": 68,
              "percentile": 96
            },
            {
              "raw": 25,
              "t_score": 69,
              "percentile": 97.2
            },
            {
              "raw": 26,
              "t_score": 71,
              "percentile": 98
            },
            {
              "raw": 27,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 28,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 29,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 30,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 31,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 32,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 86,
              "percentile": 99.9
            }
          ]
        }
      },
      "50+": {
        "A": {
          "scale_name": "Inattention / Memory Problems",
          "max_raw": 36,
          "cohort_mean": 12.15,
          "cohort_sd": 6.46,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 3
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.2
            },
            {
              "raw": 2,
              "t_score": 34,
              "percentile": 5.8
            },
            {
              "raw": 3,
              "t_score": 36,
              "percentile": 7.8
            },
            {
              "raw": 4,
              "t_score": 37,
              "percentile": 10.4
            },
            {
              "raw": 5,
              "t_score": 39,
              "percentile": 13.4
            },
            {
              "raw": 6,
              "t_score": 40,
              "percentile": 17.1
            },
            {
              "raw": 7,
              "t_score": 42,
              "percentile": 21.3
            },
            {
              "raw": 8,
              "t_score": 44,
              "percentile": 26
            },
            {
              "raw": 9,
              "t_score": 45,
              "percentile": 31.3
            },
            {
              "raw": 10,
              "t_score": 47,
              "percentile": 37
            },
            {
              "raw": 11,
              "t_score": 48,
              "percentile": 42.9
            },
            {
              "raw": 12,
              "t_score": 50,
              "percentile": 49.1
            },
            {
              "raw": 13,
              "t_score": 51,
              "percentile": 55.2
            },
            {
              "raw": 14,
              "t_score": 53,
              "percentile": 61.3
            },
            {
              "raw": 15,
              "t_score": 54,
              "percentile": 67
            },
            {
              "raw": 16,
              "t_score": 56,
              "percentile": 72.4
            },
            {
              "raw": 17,
              "t_score": 58,
              "percentile": 77.4
            },
            {
              "raw": 18,
              "t_score": 59,
              "percentile": 81.7
            },
            {
              "raw": 19,
              "t_score": 61,
              "percentile": 85.6
            },
            {
              "raw": 20,
              "t_score": 62,
              "percentile": 88.8
            },
            {
              "raw": 21,
              "t_score": 64,
              "percentile": 91.5
            },
            {
              "raw": 22,
              "t_score": 65,
              "percentile": 93.6
            },
            {
              "raw": 23,
              "t_score": 67,
              "percentile": 95.3
            },
            {
              "raw": 24,
              "t_score": 68,
              "percentile": 96.7
            },
            {
              "raw": 25,
              "t_score": 70,
              "percentile": 97.7
            },
            {
              "raw": 26,
              "t_score": 71,
              "percentile": 98.4
            },
            {
              "raw": 27,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 28,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 29,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 30,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 31,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 32,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 87,
              "percentile": 99.9
            }
          ]
        },
        "B": {
          "scale_name": "Hyperactivity / Restlessness",
          "max_raw": 36,
          "cohort_mean": 10.08,
          "cohort_sd": 5.89,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.4
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 6.2
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 8.5
            },
            {
              "raw": 3,
              "t_score": 38,
              "percentile": 11.5
            },
            {
              "raw": 4,
              "t_score": 40,
              "percentile": 15.1
            },
            {
              "raw": 5,
              "t_score": 41,
              "percentile": 19.4
            },
            {
              "raw": 6,
              "t_score": 43,
              "percentile": 24.4
            },
            {
              "raw": 7,
              "t_score": 45,
              "percentile": 30.1
            },
            {
              "raw": 8,
              "t_score": 46,
              "percentile": 36.2
            },
            {
              "raw": 9,
              "t_score": 48,
              "percentile": 42.7
            },
            {
              "raw": 10,
              "t_score": 50,
              "percentile": 49.5
            },
            {
              "raw": 11,
              "t_score": 52,
              "percentile": 56.2
            },
            {
              "raw": 12,
              "t_score": 53,
              "percentile": 62.8
            },
            {
              "raw": 13,
              "t_score": 55,
              "percentile": 69
            },
            {
              "raw": 14,
              "t_score": 57,
              "percentile": 74.7
            },
            {
              "raw": 15,
              "t_score": 58,
              "percentile": 79.8
            },
            {
              "raw": 16,
              "t_score": 60,
              "percentile": 84.3
            },
            {
              "raw": 17,
              "t_score": 62,
              "percentile": 88
            },
            {
              "raw": 18,
              "t_score": 63,
              "percentile": 91.1
            },
            {
              "raw": 19,
              "t_score": 65,
              "percentile": 93.5
            },
            {
              "raw": 20,
              "t_score": 67,
              "percentile": 95.4
            },
            {
              "raw": 21,
              "t_score": 69,
              "percentile": 96.8
            },
            {
              "raw": 22,
              "t_score": 70,
              "percentile": 97.9
            },
            {
              "raw": 23,
              "t_score": 72,
              "percentile": 98.6
            },
            {
              "raw": 24,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 25,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 26,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 27,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 28,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 29,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "C": {
          "scale_name": "Impulsivity / Emotional Lability",
          "max_raw": 36,
          "cohort_mean": 10.89,
          "cohort_sd": 6.17,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.9
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 5.5
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 7.5
            },
            {
              "raw": 3,
              "t_score": 37,
              "percentile": 10.1
            },
            {
              "raw": 4,
              "t_score": 39,
              "percentile": 13.2
            },
            {
              "raw": 5,
              "t_score": 40,
              "percentile": 17
            },
            {
              "raw": 6,
              "t_score": 42,
              "percentile": 21.4
            },
            {
              "raw": 7,
              "t_score": 44,
              "percentile": 26.4
            },
            {
              "raw": 8,
              "t_score": 45,
              "percentile": 32
            },
            {
              "raw": 9,
              "t_score": 47,
              "percentile": 38
            },
            {
              "raw": 10,
              "t_score": 49,
              "percentile": 44.3
            },
            {
              "raw": 11,
              "t_score": 50,
              "percentile": 50.7
            },
            {
              "raw": 12,
              "t_score": 52,
              "percentile": 57.1
            },
            {
              "raw": 13,
              "t_score": 53,
              "percentile": 63.4
            },
            {
              "raw": 14,
              "t_score": 55,
              "percentile": 69.3
            },
            {
              "raw": 15,
              "t_score": 57,
              "percentile": 74.7
            },
            {
              "raw": 16,
              "t_score": 58,
              "percentile": 79.6
            },
            {
              "raw": 17,
              "t_score": 60,
              "percentile": 83.9
            },
            {
              "raw": 18,
              "t_score": 62,
              "percentile": 87.5
            },
            {
              "raw": 19,
              "t_score": 63,
              "percentile": 90.5
            },
            {
              "raw": 20,
              "t_score": 65,
              "percentile": 93
            },
            {
              "raw": 21,
              "t_score": 66,
              "percentile": 94.9
            },
            {
              "raw": 22,
              "t_score": 68,
              "percentile": 96.4
            },
            {
              "raw": 23,
              "t_score": 70,
              "percentile": 97.5
            },
            {
              "raw": 24,
              "t_score": 71,
              "percentile": 98.3
            },
            {
              "raw": 25,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 26,
              "t_score": 74,
              "percentile": 99.3
            },
            {
              "raw": 27,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 28,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 29,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 30,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "D": {
          "scale_name": "Problems with Self-Concept",
          "max_raw": 36,
          "cohort_mean": 8.82,
          "cohort_sd": 5.61,
          "lookup": [
            {
              "raw": 0,
              "t_score": 34,
              "percentile": 5.8
            },
            {
              "raw": 1,
              "t_score": 36,
              "percentile": 8.1
            },
            {
              "raw": 2,
              "t_score": 38,
              "percentile": 11.2
            },
            {
              "raw": 3,
              "t_score": 40,
              "percentile": 15
            },
            {
              "raw": 4,
              "t_score": 41,
              "percentile": 19.5
            },
            {
              "raw": 5,
              "t_score": 43,
              "percentile": 24.8
            },
            {
              "raw": 6,
              "t_score": 45,
              "percentile": 30.7
            },
            {
              "raw": 7,
              "t_score": 47,
              "percentile": 37.3
            },
            {
              "raw": 8,
              "t_score": 49,
              "percentile": 44.2
            },
            {
              "raw": 9,
              "t_score": 50,
              "percentile": 51.3
            },
            {
              "raw": 10,
              "t_score": 52,
              "percentile": 58.3
            },
            {
              "raw": 11,
              "t_score": 54,
              "percentile": 65.1
            },
            {
              "raw": 12,
              "t_score": 56,
              "percentile": 71.5
            },
            {
              "raw": 13,
              "t_score": 57,
              "percentile": 77.2
            },
            {
              "raw": 14,
              "t_score": 59,
              "percentile": 82.2
            },
            {
              "raw": 15,
              "t_score": 61,
              "percentile": 86.5
            },
            {
              "raw": 16,
              "t_score": 63,
              "percentile": 90
            },
            {
              "raw": 17,
              "t_score": 65,
              "percentile": 92.8
            },
            {
              "raw": 18,
              "t_score": 66,
              "percentile": 94.9
            },
            {
              "raw": 19,
              "t_score": 68,
              "percentile": 96.5
            },
            {
              "raw": 20,
              "t_score": 70,
              "percentile": 97.7
            },
            {
              "raw": 21,
              "t_score": 72,
              "percentile": 98.5
            },
            {
              "raw": 22,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 23,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 24,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 25,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 26,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 28,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 29,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "E": {
          "scale_name": "DSM Inattentive Symptoms",
          "max_raw": 27,
          "cohort_mean": 9.36,
          "cohort_sd": 5.22,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.7
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 5.5
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 7.9
            },
            {
              "raw": 3,
              "t_score": 38,
              "percentile": 11.2
            },
            {
              "raw": 4,
              "t_score": 40,
              "percentile": 15.2
            },
            {
              "raw": 5,
              "t_score": 42,
              "percentile": 20.2
            },
            {
              "raw": 6,
              "t_score": 44,
              "percentile": 26
            },
            {
              "raw": 7,
              "t_score": 45,
              "percentile": 32.6
            },
            {
              "raw": 8,
              "t_score": 47,
              "percentile": 39.7
            },
            {
              "raw": 9,
              "t_score": 49,
              "percentile": 47.3
            },
            {
              "raw": 10,
              "t_score": 51,
              "percentile": 54.9
            },
            {
              "raw": 11,
              "t_score": 53,
              "percentile": 62.3
            },
            {
              "raw": 12,
              "t_score": 55,
              "percentile": 69.3
            },
            {
              "raw": 13,
              "t_score": 57,
              "percentile": 75.7
            },
            {
              "raw": 14,
              "t_score": 59,
              "percentile": 81.3
            },
            {
              "raw": 15,
              "t_score": 61,
              "percentile": 86
            },
            {
              "raw": 16,
              "t_score": 63,
              "percentile": 89.8
            },
            {
              "raw": 17,
              "t_score": 65,
              "percentile": 92.8
            },
            {
              "raw": 18,
              "t_score": 67,
              "percentile": 95.1
            },
            {
              "raw": 19,
              "t_score": 68,
              "percentile": 96.7
            },
            {
              "raw": 20,
              "t_score": 70,
              "percentile": 97.9
            },
            {
              "raw": 21,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 22,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 23,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 24,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 25,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 26,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 84,
              "percentile": 99.9
            }
          ]
        },
        "F": {
          "scale_name": "DSM Hyperactive-Impulsive Symptoms",
          "max_raw": 27,
          "cohort_mean": 8.01,
          "cohort_sd": 4.84,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.9
            },
            {
              "raw": 1,
              "t_score": 36,
              "percentile": 7.4
            },
            {
              "raw": 2,
              "t_score": 38,
              "percentile": 10.7
            },
            {
              "raw": 3,
              "t_score": 40,
              "percentile": 15.1
            },
            {
              "raw": 4,
              "t_score": 42,
              "percentile": 20.4
            },
            {
              "raw": 5,
              "t_score": 44,
              "percentile": 26.7
            },
            {
              "raw": 6,
              "t_score": 46,
              "percentile": 33.9
            },
            {
              "raw": 7,
              "t_score": 48,
              "percentile": 41.7
            },
            {
              "raw": 8,
              "t_score": 50,
              "percentile": 49.9
            },
            {
              "raw": 9,
              "t_score": 52,
              "percentile": 58.1
            },
            {
              "raw": 10,
              "t_score": 54,
              "percentile": 65.9
            },
            {
              "raw": 11,
              "t_score": 56,
              "percentile": 73.1
            },
            {
              "raw": 12,
              "t_score": 58,
              "percentile": 79.5
            },
            {
              "raw": 13,
              "t_score": 60,
              "percentile": 84.8
            },
            {
              "raw": 14,
              "t_score": 62,
              "percentile": 89.2
            },
            {
              "raw": 15,
              "t_score": 64,
              "percentile": 92.5
            },
            {
              "raw": 16,
              "t_score": 66,
              "percentile": 95
            },
            {
              "raw": 17,
              "t_score": 69,
              "percentile": 96.8
            },
            {
              "raw": 18,
              "t_score": 71,
              "percentile": 98
            },
            {
              "raw": 19,
              "t_score": 73,
              "percentile": 98.8
            },
            {
              "raw": 20,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 21,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 22,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 23,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 24,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 25,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 26,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 89,
              "percentile": 99.9
            }
          ]
        },
        "G": {
          "scale_name": "Total ADHD Symptoms",
          "max_raw": 54,
          "cohort_mean": 17.37,
          "cohort_sd": 9.31,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 3.1
            },
            {
              "raw": 1,
              "t_score": 32,
              "percentile": 3.9
            },
            {
              "raw": 2,
              "t_score": 33,
              "percentile": 4.9
            },
            {
              "raw": 3,
              "t_score": 35,
              "percentile": 6.1
            },
            {
              "raw": 4,
              "t_score": 36,
              "percentile": 7.5
            },
            {
              "raw": 5,
              "t_score": 37,
              "percentile": 9.2
            },
            {
              "raw": 6,
              "t_score": 38,
              "percentile": 11.1
            },
            {
              "raw": 7,
              "t_score": 39,
              "percentile": 13.3
            },
            {
              "raw": 8,
              "t_score": 40,
              "percentile": 15.7
            },
            {
              "raw": 9,
              "t_score": 41,
              "percentile": 18.4
            },
            {
              "raw": 10,
              "t_score": 42,
              "percentile": 21.4
            },
            {
              "raw": 11,
              "t_score": 43,
              "percentile": 24.7
            },
            {
              "raw": 12,
              "t_score": 44,
              "percentile": 28.2
            },
            {
              "raw": 13,
              "t_score": 45,
              "percentile": 31.9
            },
            {
              "raw": 14,
              "t_score": 46,
              "percentile": 35.9
            },
            {
              "raw": 15,
              "t_score": 47,
              "percentile": 40
            },
            {
              "raw": 16,
              "t_score": 49,
              "percentile": 44.2
            },
            {
              "raw": 17,
              "t_score": 50,
              "percentile": 48.4
            },
            {
              "raw": 18,
              "t_score": 51,
              "percentile": 52.7
            },
            {
              "raw": 19,
              "t_score": 52,
              "percentile": 56.9
            },
            {
              "raw": 20,
              "t_score": 53,
              "percentile": 61.1
            },
            {
              "raw": 21,
              "t_score": 54,
              "percentile": 65.2
            },
            {
              "raw": 22,
              "t_score": 55,
              "percentile": 69.1
            },
            {
              "raw": 23,
              "t_score": 56,
              "percentile": 72.7
            },
            {
              "raw": 24,
              "t_score": 57,
              "percentile": 76.2
            },
            {
              "raw": 25,
              "t_score": 58,
              "percentile": 79.4
            },
            {
              "raw": 26,
              "t_score": 59,
              "percentile": 82.3
            },
            {
              "raw": 27,
              "t_score": 60,
              "percentile": 85
            },
            {
              "raw": 28,
              "t_score": 61,
              "percentile": 87.3
            },
            {
              "raw": 29,
              "t_score": 62,
              "percentile": 89.4
            },
            {
              "raw": 30,
              "t_score": 64,
              "percentile": 91.3
            },
            {
              "raw": 31,
              "t_score": 65,
              "percentile": 92.8
            },
            {
              "raw": 32,
              "t_score": 66,
              "percentile": 94.2
            },
            {
              "raw": 33,
              "t_score": 67,
              "percentile": 95.3
            },
            {
              "raw": 34,
              "t_score": 68,
              "percentile": 96.3
            },
            {
              "raw": 35,
              "t_score": 69,
              "percentile": 97.1
            },
            {
              "raw": 36,
              "t_score": 70,
              "percentile": 97.7
            },
            {
              "raw": 37,
              "t_score": 71,
              "percentile": 98.3
            },
            {
              "raw": 38,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 39,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 40,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 41,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 42,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 43,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 44,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 45,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 46,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 47,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 48,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 49,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 50,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 51,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 52,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 53,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 54,
              "t_score": 89,
              "percentile": 99.9
            }
          ]
        },
        "H": {
          "scale_name": "ADHD Index",
          "max_raw": 36,
          "cohort_mean": 11.52,
          "cohort_sd": 6.08,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 2.9
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.2
            },
            {
              "raw": 2,
              "t_score": 34,
              "percentile": 5.9
            },
            {
              "raw": 3,
              "t_score": 36,
              "percentile": 8.1
            },
            {
              "raw": 4,
              "t_score": 38,
              "percentile": 10.8
            },
            {
              "raw": 5,
              "t_score": 39,
              "percentile": 14.2
            },
            {
              "raw": 6,
              "t_score": 41,
              "percentile": 18.2
            },
            {
              "raw": 7,
              "t_score": 43,
              "percentile": 22.9
            },
            {
              "raw": 8,
              "t_score": 44,
              "percentile": 28.1
            },
            {
              "raw": 9,
              "t_score": 46,
              "percentile": 33.9
            },
            {
              "raw": 10,
              "t_score": 48,
              "percentile": 40.1
            },
            {
              "raw": 11,
              "t_score": 49,
              "percentile": 46.6
            },
            {
              "raw": 12,
              "t_score": 51,
              "percentile": 53.1
            },
            {
              "raw": 13,
              "t_score": 52,
              "percentile": 59.6
            },
            {
              "raw": 14,
              "t_score": 54,
              "percentile": 65.8
            },
            {
              "raw": 15,
              "t_score": 56,
              "percentile": 71.6
            },
            {
              "raw": 16,
              "t_score": 57,
              "percentile": 76.9
            },
            {
              "raw": 17,
              "t_score": 59,
              "percentile": 81.6
            },
            {
              "raw": 18,
              "t_score": 61,
              "percentile": 85.7
            },
            {
              "raw": 19,
              "t_score": 62,
              "percentile": 89.1
            },
            {
              "raw": 20,
              "t_score": 64,
              "percentile": 91.8
            },
            {
              "raw": 21,
              "t_score": 66,
              "percentile": 94.1
            },
            {
              "raw": 22,
              "t_score": 67,
              "percentile": 95.8
            },
            {
              "raw": 23,
              "t_score": 69,
              "percentile": 97
            },
            {
              "raw": 24,
              "t_score": 71,
              "percentile": 98
            },
            {
              "raw": 25,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 26,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 27,
              "t_score": 75,
              "percentile": 99.5
            },
            {
              "raw": 28,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 29,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 30,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        }
      }
    },
    "Female": {
      "18-29": {
        "A": {
          "scale_name": "Inattention / Memory Problems",
          "max_raw": 36,
          "cohort_mean": 13.5,
          "cohort_sd": 6.8,
          "lookup": [
            {
              "raw": 0,
              "t_score": 30,
              "percentile": 2.4
            },
            {
              "raw": 1,
              "t_score": 32,
              "percentile": 3.3
            },
            {
              "raw": 2,
              "t_score": 33,
              "percentile": 4.5
            },
            {
              "raw": 3,
              "t_score": 35,
              "percentile": 6.1
            },
            {
              "raw": 4,
              "t_score": 36,
              "percentile": 8.1
            },
            {
              "raw": 5,
              "t_score": 38,
              "percentile": 10.6
            },
            {
              "raw": 6,
              "t_score": 39,
              "percentile": 13.5
            },
            {
              "raw": 7,
              "t_score": 40,
              "percentile": 17
            },
            {
              "raw": 8,
              "t_score": 42,
              "percentile": 20.9
            },
            {
              "raw": 9,
              "t_score": 43,
              "percentile": 25.4
            },
            {
              "raw": 10,
              "t_score": 45,
              "percentile": 30.3
            },
            {
              "raw": 11,
              "t_score": 46,
              "percentile": 35.7
            },
            {
              "raw": 12,
              "t_score": 48,
              "percentile": 41.3
            },
            {
              "raw": 13,
              "t_score": 49,
              "percentile": 47.1
            },
            {
              "raw": 14,
              "t_score": 51,
              "percentile": 52.9
            },
            {
              "raw": 15,
              "t_score": 52,
              "percentile": 58.7
            },
            {
              "raw": 16,
              "t_score": 54,
              "percentile": 64.3
            },
            {
              "raw": 17,
              "t_score": 55,
              "percentile": 69.7
            },
            {
              "raw": 18,
              "t_score": 57,
              "percentile": 74.6
            },
            {
              "raw": 19,
              "t_score": 58,
              "percentile": 79.1
            },
            {
              "raw": 20,
              "t_score": 60,
              "percentile": 83
            },
            {
              "raw": 21,
              "t_score": 61,
              "percentile": 86.5
            },
            {
              "raw": 22,
              "t_score": 62,
              "percentile": 89.4
            },
            {
              "raw": 23,
              "t_score": 64,
              "percentile": 91.9
            },
            {
              "raw": 24,
              "t_score": 65,
              "percentile": 93.9
            },
            {
              "raw": 25,
              "t_score": 67,
              "percentile": 95.5
            },
            {
              "raw": 26,
              "t_score": 68,
              "percentile": 96.7
            },
            {
              "raw": 27,
              "t_score": 70,
              "percentile": 97.6
            },
            {
              "raw": 28,
              "t_score": 71,
              "percentile": 98.4
            },
            {
              "raw": 29,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 30,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 31,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 32,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 33,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 34,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 83,
              "percentile": 99.9
            }
          ]
        },
        "B": {
          "scale_name": "Hyperactivity / Restlessness",
          "max_raw": 36,
          "cohort_mean": 11.2,
          "cohort_sd": 6.2,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.5
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 5
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 6.9
            },
            {
              "raw": 3,
              "t_score": 37,
              "percentile": 9.3
            },
            {
              "raw": 4,
              "t_score": 38,
              "percentile": 12.3
            },
            {
              "raw": 5,
              "t_score": 40,
              "percentile": 15.9
            },
            {
              "raw": 6,
              "t_score": 42,
              "percentile": 20.1
            },
            {
              "raw": 7,
              "t_score": 43,
              "percentile": 24.9
            },
            {
              "raw": 8,
              "t_score": 45,
              "percentile": 30.3
            },
            {
              "raw": 9,
              "t_score": 46,
              "percentile": 36.1
            },
            {
              "raw": 10,
              "t_score": 48,
              "percentile": 42.3
            },
            {
              "raw": 11,
              "t_score": 50,
              "percentile": 48.7
            },
            {
              "raw": 12,
              "t_score": 51,
              "percentile": 55.1
            },
            {
              "raw": 13,
              "t_score": 53,
              "percentile": 61.4
            },
            {
              "raw": 14,
              "t_score": 55,
              "percentile": 67.4
            },
            {
              "raw": 15,
              "t_score": 56,
              "percentile": 73
            },
            {
              "raw": 16,
              "t_score": 58,
              "percentile": 78.1
            },
            {
              "raw": 17,
              "t_score": 59,
              "percentile": 82.5
            },
            {
              "raw": 18,
              "t_score": 61,
              "percentile": 86.4
            },
            {
              "raw": 19,
              "t_score": 63,
              "percentile": 89.6
            },
            {
              "raw": 20,
              "t_score": 64,
              "percentile": 92.2
            },
            {
              "raw": 21,
              "t_score": 66,
              "percentile": 94.3
            },
            {
              "raw": 22,
              "t_score": 67,
              "percentile": 95.9
            },
            {
              "raw": 23,
              "t_score": 69,
              "percentile": 97.1
            },
            {
              "raw": 24,
              "t_score": 71,
              "percentile": 98.1
            },
            {
              "raw": 25,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 26,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 27,
              "t_score": 75,
              "percentile": 99.5
            },
            {
              "raw": 28,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 29,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 30,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "C": {
          "scale_name": "Impulsivity / Emotional Lability",
          "max_raw": 36,
          "cohort_mean": 12.1,
          "cohort_sd": 6.5,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 3.1
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.4
            },
            {
              "raw": 2,
              "t_score": 34,
              "percentile": 6
            },
            {
              "raw": 3,
              "t_score": 36,
              "percentile": 8.1
            },
            {
              "raw": 4,
              "t_score": 38,
              "percentile": 10.6
            },
            {
              "raw": 5,
              "t_score": 39,
              "percentile": 13.7
            },
            {
              "raw": 6,
              "t_score": 41,
              "percentile": 17.4
            },
            {
              "raw": 7,
              "t_score": 42,
              "percentile": 21.6
            },
            {
              "raw": 8,
              "t_score": 44,
              "percentile": 26.4
            },
            {
              "raw": 9,
              "t_score": 45,
              "percentile": 31.7
            },
            {
              "raw": 10,
              "t_score": 47,
              "percentile": 37.3
            },
            {
              "raw": 11,
              "t_score": 48,
              "percentile": 43.3
            },
            {
              "raw": 12,
              "t_score": 50,
              "percentile": 49.4
            },
            {
              "raw": 13,
              "t_score": 51,
              "percentile": 55.5
            },
            {
              "raw": 14,
              "t_score": 53,
              "percentile": 61.5
            },
            {
              "raw": 15,
              "t_score": 54,
              "percentile": 67.2
            },
            {
              "raw": 16,
              "t_score": 56,
              "percentile": 72.6
            },
            {
              "raw": 17,
              "t_score": 58,
              "percentile": 77.5
            },
            {
              "raw": 18,
              "t_score": 59,
              "percentile": 81.8
            },
            {
              "raw": 19,
              "t_score": 61,
              "percentile": 85.6
            },
            {
              "raw": 20,
              "t_score": 62,
              "percentile": 88.8
            },
            {
              "raw": 21,
              "t_score": 64,
              "percentile": 91.5
            },
            {
              "raw": 22,
              "t_score": 65,
              "percentile": 93.6
            },
            {
              "raw": 23,
              "t_score": 67,
              "percentile": 95.3
            },
            {
              "raw": 24,
              "t_score": 68,
              "percentile": 96.6
            },
            {
              "raw": 25,
              "t_score": 70,
              "percentile": 97.6
            },
            {
              "raw": 26,
              "t_score": 71,
              "percentile": 98.4
            },
            {
              "raw": 27,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 28,
              "t_score": 74,
              "percentile": 99.3
            },
            {
              "raw": 29,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 30,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 31,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 32,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 87,
              "percentile": 99.9
            }
          ]
        },
        "D": {
          "scale_name": "Problems with Self-Concept",
          "max_raw": 36,
          "cohort_mean": 9.8,
          "cohort_sd": 5.9,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.8
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 6.8
            },
            {
              "raw": 2,
              "t_score": 37,
              "percentile": 9.3
            },
            {
              "raw": 3,
              "t_score": 38,
              "percentile": 12.5
            },
            {
              "raw": 4,
              "t_score": 40,
              "percentile": 16.3
            },
            {
              "raw": 5,
              "t_score": 42,
              "percentile": 20.8
            },
            {
              "raw": 6,
              "t_score": 44,
              "percentile": 26
            },
            {
              "raw": 7,
              "t_score": 45,
              "percentile": 31.8
            },
            {
              "raw": 8,
              "t_score": 47,
              "percentile": 38
            },
            {
              "raw": 9,
              "t_score": 49,
              "percentile": 44.6
            },
            {
              "raw": 10,
              "t_score": 50,
              "percentile": 51.4
            },
            {
              "raw": 11,
              "t_score": 52,
              "percentile": 58.1
            },
            {
              "raw": 12,
              "t_score": 54,
              "percentile": 64.5
            },
            {
              "raw": 13,
              "t_score": 55,
              "percentile": 70.6
            },
            {
              "raw": 14,
              "t_score": 57,
              "percentile": 76.2
            },
            {
              "raw": 15,
              "t_score": 59,
              "percentile": 81.1
            },
            {
              "raw": 16,
              "t_score": 61,
              "percentile": 85.3
            },
            {
              "raw": 17,
              "t_score": 62,
              "percentile": 88.9
            },
            {
              "raw": 18,
              "t_score": 64,
              "percentile": 91.8
            },
            {
              "raw": 19,
              "t_score": 66,
              "percentile": 94.1
            },
            {
              "raw": 20,
              "t_score": 67,
              "percentile": 95.8
            },
            {
              "raw": 21,
              "t_score": 69,
              "percentile": 97.1
            },
            {
              "raw": 22,
              "t_score": 71,
              "percentile": 98.1
            },
            {
              "raw": 23,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 24,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 25,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 26,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 27,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 28,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 29,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "E": {
          "scale_name": "DSM Inattentive Symptoms",
          "max_raw": 27,
          "cohort_mean": 10.4,
          "cohort_sd": 5.5,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 2.9
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.4
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 6.3
            },
            {
              "raw": 3,
              "t_score": 37,
              "percentile": 8.9
            },
            {
              "raw": 4,
              "t_score": 38,
              "percentile": 12.2
            },
            {
              "raw": 5,
              "t_score": 40,
              "percentile": 16.3
            },
            {
              "raw": 6,
              "t_score": 42,
              "percentile": 21.2
            },
            {
              "raw": 7,
              "t_score": 44,
              "percentile": 26.8
            },
            {
              "raw": 8,
              "t_score": 46,
              "percentile": 33.1
            },
            {
              "raw": 9,
              "t_score": 47,
              "percentile": 40
            },
            {
              "raw": 10,
              "t_score": 49,
              "percentile": 47.1
            },
            {
              "raw": 11,
              "t_score": 51,
              "percentile": 54.3
            },
            {
              "raw": 12,
              "t_score": 53,
              "percentile": 61.4
            },
            {
              "raw": 13,
              "t_score": 55,
              "percentile": 68.2
            },
            {
              "raw": 14,
              "t_score": 57,
              "percentile": 74.4
            },
            {
              "raw": 15,
              "t_score": 58,
              "percentile": 79.9
            },
            {
              "raw": 16,
              "t_score": 60,
              "percentile": 84.6
            },
            {
              "raw": 17,
              "t_score": 62,
              "percentile": 88.5
            },
            {
              "raw": 18,
              "t_score": 64,
              "percentile": 91.6
            },
            {
              "raw": 19,
              "t_score": 66,
              "percentile": 94.1
            },
            {
              "raw": 20,
              "t_score": 67,
              "percentile": 96
            },
            {
              "raw": 21,
              "t_score": 69,
              "percentile": 97.3
            },
            {
              "raw": 22,
              "t_score": 71,
              "percentile": 98.3
            },
            {
              "raw": 23,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 24,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 25,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 26,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 27,
              "t_score": 80,
              "percentile": 99.9
            }
          ]
        },
        "F": {
          "scale_name": "DSM Hyperactive-Impulsive Symptoms",
          "max_raw": 27,
          "cohort_mean": 8.9,
          "cohort_sd": 5.1,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 6.1
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 8.8
            },
            {
              "raw": 3,
              "t_score": 38,
              "percentile": 12.4
            },
            {
              "raw": 4,
              "t_score": 40,
              "percentile": 16.8
            },
            {
              "raw": 5,
              "t_score": 42,
              "percentile": 22.2
            },
            {
              "raw": 6,
              "t_score": 44,
              "percentile": 28.5
            },
            {
              "raw": 7,
              "t_score": 46,
              "percentile": 35.5
            },
            {
              "raw": 8,
              "t_score": 48,
              "percentile": 43
            },
            {
              "raw": 9,
              "t_score": 50,
              "percentile": 50.8
            },
            {
              "raw": 10,
              "t_score": 52,
              "percentile": 58.5
            },
            {
              "raw": 11,
              "t_score": 54,
              "percentile": 66
            },
            {
              "raw": 12,
              "t_score": 56,
              "percentile": 72.8
            },
            {
              "raw": 13,
              "t_score": 58,
              "percentile": 78.9
            },
            {
              "raw": 14,
              "t_score": 60,
              "percentile": 84.1
            },
            {
              "raw": 15,
              "t_score": 62,
              "percentile": 88.4
            },
            {
              "raw": 16,
              "t_score": 64,
              "percentile": 91.8
            },
            {
              "raw": 17,
              "t_score": 66,
              "percentile": 94.4
            },
            {
              "raw": 18,
              "t_score": 68,
              "percentile": 96.3
            },
            {
              "raw": 19,
              "t_score": 70,
              "percentile": 97.6
            },
            {
              "raw": 20,
              "t_score": 72,
              "percentile": 98.5
            },
            {
              "raw": 21,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 22,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 23,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 24,
              "t_score": 80,
              "percentile": 99.8
            },
            {
              "raw": 25,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 26,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 85,
              "percentile": 99.9
            }
          ]
        },
        "G": {
          "scale_name": "Total ADHD Symptoms",
          "max_raw": 54,
          "cohort_mean": 19.3,
          "cohort_sd": 9.8,
          "lookup": [
            {
              "raw": 0,
              "t_score": 30,
              "percentile": 2.4
            },
            {
              "raw": 1,
              "t_score": 31,
              "percentile": 3.1
            },
            {
              "raw": 2,
              "t_score": 32,
              "percentile": 3.9
            },
            {
              "raw": 3,
              "t_score": 33,
              "percentile": 4.8
            },
            {
              "raw": 4,
              "t_score": 34,
              "percentile": 5.9
            },
            {
              "raw": 5,
              "t_score": 35,
              "percentile": 7.2
            },
            {
              "raw": 6,
              "t_score": 36,
              "percentile": 8.7
            },
            {
              "raw": 7,
              "t_score": 37,
              "percentile": 10.5
            },
            {
              "raw": 8,
              "t_score": 38,
              "percentile": 12.4
            },
            {
              "raw": 9,
              "t_score": 39,
              "percentile": 14.7
            },
            {
              "raw": 10,
              "t_score": 41,
              "percentile": 17.1
            },
            {
              "raw": 11,
              "t_score": 42,
              "percentile": 19.9
            },
            {
              "raw": 12,
              "t_score": 43,
              "percentile": 22.8
            },
            {
              "raw": 13,
              "t_score": 44,
              "percentile": 26
            },
            {
              "raw": 14,
              "t_score": 45,
              "percentile": 29.4
            },
            {
              "raw": 15,
              "t_score": 46,
              "percentile": 33
            },
            {
              "raw": 16,
              "t_score": 47,
              "percentile": 36.8
            },
            {
              "raw": 17,
              "t_score": 48,
              "percentile": 40.7
            },
            {
              "raw": 18,
              "t_score": 49,
              "percentile": 44.7
            },
            {
              "raw": 19,
              "t_score": 50,
              "percentile": 48.8
            },
            {
              "raw": 20,
              "t_score": 51,
              "percentile": 52.8
            },
            {
              "raw": 21,
              "t_score": 52,
              "percentile": 56.9
            },
            {
              "raw": 22,
              "t_score": 53,
              "percentile": 60.9
            },
            {
              "raw": 23,
              "t_score": 54,
              "percentile": 64.7
            },
            {
              "raw": 24,
              "t_score": 55,
              "percentile": 68.4
            },
            {
              "raw": 25,
              "t_score": 56,
              "percentile": 72
            },
            {
              "raw": 26,
              "t_score": 57,
              "percentile": 75.3
            },
            {
              "raw": 27,
              "t_score": 58,
              "percentile": 78.4
            },
            {
              "raw": 28,
              "t_score": 59,
              "percentile": 81.3
            },
            {
              "raw": 29,
              "t_score": 60,
              "percentile": 83.9
            },
            {
              "raw": 30,
              "t_score": 61,
              "percentile": 86.3
            },
            {
              "raw": 31,
              "t_score": 62,
              "percentile": 88.4
            },
            {
              "raw": 32,
              "t_score": 63,
              "percentile": 90.2
            },
            {
              "raw": 33,
              "t_score": 64,
              "percentile": 91.9
            },
            {
              "raw": 34,
              "t_score": 65,
              "percentile": 93.3
            },
            {
              "raw": 35,
              "t_score": 66,
              "percentile": 94.5
            },
            {
              "raw": 36,
              "t_score": 67,
              "percentile": 95.6
            },
            {
              "raw": 37,
              "t_score": 68,
              "percentile": 96.5
            },
            {
              "raw": 38,
              "t_score": 69,
              "percentile": 97.2
            },
            {
              "raw": 39,
              "t_score": 70,
              "percentile": 97.8
            },
            {
              "raw": 40,
              "t_score": 71,
              "percentile": 98.3
            },
            {
              "raw": 41,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 42,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 43,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 44,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 45,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 46,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 47,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 48,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 49,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 50,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 51,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 52,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 53,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 54,
              "t_score": 85,
              "percentile": 99.9
            }
          ]
        },
        "H": {
          "scale_name": "ADHD Index",
          "max_raw": 36,
          "cohort_mean": 12.8,
          "cohort_sd": 6.4,
          "lookup": [
            {
              "raw": 0,
              "t_score": 30,
              "percentile": 2.3
            },
            {
              "raw": 1,
              "t_score": 32,
              "percentile": 3.3
            },
            {
              "raw": 2,
              "t_score": 33,
              "percentile": 4.6
            },
            {
              "raw": 3,
              "t_score": 35,
              "percentile": 6.3
            },
            {
              "raw": 4,
              "t_score": 36,
              "percentile": 8.5
            },
            {
              "raw": 5,
              "t_score": 38,
              "percentile": 11.1
            },
            {
              "raw": 6,
              "t_score": 39,
              "percentile": 14.4
            },
            {
              "raw": 7,
              "t_score": 41,
              "percentile": 18.2
            },
            {
              "raw": 8,
              "t_score": 42,
              "percentile": 22.7
            },
            {
              "raw": 9,
              "t_score": 44,
              "percentile": 27.6
            },
            {
              "raw": 10,
              "t_score": 46,
              "percentile": 33.1
            },
            {
              "raw": 11,
              "t_score": 47,
              "percentile": 38.9
            },
            {
              "raw": 12,
              "t_score": 49,
              "percentile": 45
            },
            {
              "raw": 13,
              "t_score": 50,
              "percentile": 51.2
            },
            {
              "raw": 14,
              "t_score": 52,
              "percentile": 57.4
            },
            {
              "raw": 15,
              "t_score": 53,
              "percentile": 63.4
            },
            {
              "raw": 16,
              "t_score": 55,
              "percentile": 69.1
            },
            {
              "raw": 17,
              "t_score": 57,
              "percentile": 74.4
            },
            {
              "raw": 18,
              "t_score": 58,
              "percentile": 79.2
            },
            {
              "raw": 19,
              "t_score": 60,
              "percentile": 83.4
            },
            {
              "raw": 20,
              "t_score": 61,
              "percentile": 87
            },
            {
              "raw": 21,
              "t_score": 63,
              "percentile": 90
            },
            {
              "raw": 22,
              "t_score": 64,
              "percentile": 92.5
            },
            {
              "raw": 23,
              "t_score": 66,
              "percentile": 94.5
            },
            {
              "raw": 24,
              "t_score": 68,
              "percentile": 96
            },
            {
              "raw": 25,
              "t_score": 69,
              "percentile": 97.2
            },
            {
              "raw": 26,
              "t_score": 71,
              "percentile": 98
            },
            {
              "raw": 27,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 28,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 29,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 30,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 31,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 32,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 86,
              "percentile": 99.9
            }
          ]
        }
      },
      "30-49": {
        "A": {
          "scale_name": "Inattention / Memory Problems",
          "max_raw": 36,
          "cohort_mean": 12.82,
          "cohort_sd": 6.66,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 2.7
            },
            {
              "raw": 1,
              "t_score": 32,
              "percentile": 3.8
            },
            {
              "raw": 2,
              "t_score": 34,
              "percentile": 5.2
            },
            {
              "raw": 3,
              "t_score": 35,
              "percentile": 7
            },
            {
              "raw": 4,
              "t_score": 37,
              "percentile": 9.3
            },
            {
              "raw": 5,
              "t_score": 38,
              "percentile": 12
            },
            {
              "raw": 6,
              "t_score": 40,
              "percentile": 15.3
            },
            {
              "raw": 7,
              "t_score": 41,
              "percentile": 19.1
            },
            {
              "raw": 8,
              "t_score": 43,
              "percentile": 23.5
            },
            {
              "raw": 9,
              "t_score": 44,
              "percentile": 28.3
            },
            {
              "raw": 10,
              "t_score": 46,
              "percentile": 33.6
            },
            {
              "raw": 11,
              "t_score": 47,
              "percentile": 39.2
            },
            {
              "raw": 12,
              "t_score": 49,
              "percentile": 45.1
            },
            {
              "raw": 13,
              "t_score": 50,
              "percentile": 51
            },
            {
              "raw": 14,
              "t_score": 52,
              "percentile": 57
            },
            {
              "raw": 15,
              "t_score": 53,
              "percentile": 62.8
            },
            {
              "raw": 16,
              "t_score": 55,
              "percentile": 68.3
            },
            {
              "raw": 17,
              "t_score": 56,
              "percentile": 73.5
            },
            {
              "raw": 18,
              "t_score": 58,
              "percentile": 78.1
            },
            {
              "raw": 19,
              "t_score": 59,
              "percentile": 82.3
            },
            {
              "raw": 20,
              "t_score": 61,
              "percentile": 85.9
            },
            {
              "raw": 21,
              "t_score": 62,
              "percentile": 89
            },
            {
              "raw": 22,
              "t_score": 64,
              "percentile": 91.6
            },
            {
              "raw": 23,
              "t_score": 65,
              "percentile": 93.7
            },
            {
              "raw": 24,
              "t_score": 67,
              "percentile": 95.3
            },
            {
              "raw": 25,
              "t_score": 68,
              "percentile": 96.6
            },
            {
              "raw": 26,
              "t_score": 70,
              "percentile": 97.6
            },
            {
              "raw": 27,
              "t_score": 71,
              "percentile": 98.3
            },
            {
              "raw": 28,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 29,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 30,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 31,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 32,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 33,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 85,
              "percentile": 99.9
            }
          ]
        },
        "B": {
          "scale_name": "Hyperactivity / Restlessness",
          "max_raw": 36,
          "cohort_mean": 10.64,
          "cohort_sd": 6.08,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 4
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 5.6
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 7.8
            },
            {
              "raw": 3,
              "t_score": 37,
              "percentile": 10.4
            },
            {
              "raw": 4,
              "t_score": 39,
              "percentile": 13.7
            },
            {
              "raw": 5,
              "t_score": 41,
              "percentile": 17.7
            },
            {
              "raw": 6,
              "t_score": 42,
              "percentile": 22.3
            },
            {
              "raw": 7,
              "t_score": 44,
              "percentile": 27.5
            },
            {
              "raw": 8,
              "t_score": 46,
              "percentile": 33.2
            },
            {
              "raw": 9,
              "t_score": 47,
              "percentile": 39.4
            },
            {
              "raw": 10,
              "t_score": 49,
              "percentile": 45.8
            },
            {
              "raw": 11,
              "t_score": 51,
              "percentile": 52.4
            },
            {
              "raw": 12,
              "t_score": 52,
              "percentile": 58.9
            },
            {
              "raw": 13,
              "t_score": 54,
              "percentile": 65.1
            },
            {
              "raw": 14,
              "t_score": 56,
              "percentile": 71
            },
            {
              "raw": 15,
              "t_score": 57,
              "percentile": 76.3
            },
            {
              "raw": 16,
              "t_score": 59,
              "percentile": 81.1
            },
            {
              "raw": 17,
              "t_score": 60,
              "percentile": 85.2
            },
            {
              "raw": 18,
              "t_score": 62,
              "percentile": 88.7
            },
            {
              "raw": 19,
              "t_score": 64,
              "percentile": 91.6
            },
            {
              "raw": 20,
              "t_score": 65,
              "percentile": 93.8
            },
            {
              "raw": 21,
              "t_score": 67,
              "percentile": 95.6
            },
            {
              "raw": 22,
              "t_score": 69,
              "percentile": 96.9
            },
            {
              "raw": 23,
              "t_score": 70,
              "percentile": 97.9
            },
            {
              "raw": 24,
              "t_score": 72,
              "percentile": 98.6
            },
            {
              "raw": 25,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 26,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 27,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 28,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 29,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "C": {
          "scale_name": "Impulsivity / Emotional Lability",
          "max_raw": 36,
          "cohort_mean": 11.49,
          "cohort_sd": 6.37,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.6
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 5
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 6.8
            },
            {
              "raw": 3,
              "t_score": 37,
              "percentile": 9.1
            },
            {
              "raw": 4,
              "t_score": 38,
              "percentile": 12
            },
            {
              "raw": 5,
              "t_score": 40,
              "percentile": 15.4
            },
            {
              "raw": 6,
              "t_score": 41,
              "percentile": 19.4
            },
            {
              "raw": 7,
              "t_score": 43,
              "percentile": 24
            },
            {
              "raw": 8,
              "t_score": 45,
              "percentile": 29.2
            },
            {
              "raw": 9,
              "t_score": 46,
              "percentile": 34.8
            },
            {
              "raw": 10,
              "t_score": 48,
              "percentile": 40.7
            },
            {
              "raw": 11,
              "t_score": 49,
              "percentile": 46.9
            },
            {
              "raw": 12,
              "t_score": 51,
              "percentile": 53.2
            },
            {
              "raw": 13,
              "t_score": 52,
              "percentile": 59.3
            },
            {
              "raw": 14,
              "t_score": 54,
              "percentile": 65.3
            },
            {
              "raw": 15,
              "t_score": 56,
              "percentile": 70.9
            },
            {
              "raw": 16,
              "t_score": 57,
              "percentile": 76
            },
            {
              "raw": 17,
              "t_score": 59,
              "percentile": 80.6
            },
            {
              "raw": 18,
              "t_score": 60,
              "percentile": 84.6
            },
            {
              "raw": 19,
              "t_score": 62,
              "percentile": 88.1
            },
            {
              "raw": 20,
              "t_score": 63,
              "percentile": 90.9
            },
            {
              "raw": 21,
              "t_score": 65,
              "percentile": 93.2
            },
            {
              "raw": 22,
              "t_score": 66,
              "percentile": 95
            },
            {
              "raw": 23,
              "t_score": 68,
              "percentile": 96.5
            },
            {
              "raw": 24,
              "t_score": 70,
              "percentile": 97.5
            },
            {
              "raw": 25,
              "t_score": 71,
              "percentile": 98.3
            },
            {
              "raw": 26,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 27,
              "t_score": 74,
              "percentile": 99.3
            },
            {
              "raw": 28,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 29,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 30,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 31,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 88,
              "percentile": 99.9
            }
          ]
        },
        "D": {
          "scale_name": "Problems with Self-Concept",
          "max_raw": 36,
          "cohort_mean": 9.31,
          "cohort_sd": 5.78,
          "lookup": [
            {
              "raw": 0,
              "t_score": 34,
              "percentile": 5.4
            },
            {
              "raw": 1,
              "t_score": 36,
              "percentile": 7.5
            },
            {
              "raw": 2,
              "t_score": 37,
              "percentile": 10.3
            },
            {
              "raw": 3,
              "t_score": 39,
              "percentile": 13.8
            },
            {
              "raw": 4,
              "t_score": 41,
              "percentile": 17.9
            },
            {
              "raw": 5,
              "t_score": 43,
              "percentile": 22.8
            },
            {
              "raw": 6,
              "t_score": 44,
              "percentile": 28.4
            },
            {
              "raw": 7,
              "t_score": 46,
              "percentile": 34.5
            },
            {
              "raw": 8,
              "t_score": 48,
              "percentile": 41
            },
            {
              "raw": 9,
              "t_score": 49,
              "percentile": 47.9
            },
            {
              "raw": 10,
              "t_score": 51,
              "percentile": 54.7
            },
            {
              "raw": 11,
              "t_score": 53,
              "percentile": 61.5
            },
            {
              "raw": 12,
              "t_score": 55,
              "percentile": 67.9
            },
            {
              "raw": 13,
              "t_score": 56,
              "percentile": 73.8
            },
            {
              "raw": 14,
              "t_score": 58,
              "percentile": 79.1
            },
            {
              "raw": 15,
              "t_score": 60,
              "percentile": 83.7
            },
            {
              "raw": 16,
              "t_score": 62,
              "percentile": 87.6
            },
            {
              "raw": 17,
              "t_score": 63,
              "percentile": 90.8
            },
            {
              "raw": 18,
              "t_score": 65,
              "percentile": 93.4
            },
            {
              "raw": 19,
              "t_score": 67,
              "percentile": 95.3
            },
            {
              "raw": 20,
              "t_score": 68,
              "percentile": 96.8
            },
            {
              "raw": 21,
              "t_score": 70,
              "percentile": 97.8
            },
            {
              "raw": 22,
              "t_score": 72,
              "percentile": 98.6
            },
            {
              "raw": 23,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 24,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 25,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 26,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 27,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 28,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 29,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "E": {
          "scale_name": "DSM Inattentive Symptoms",
          "max_raw": 27,
          "cohort_mean": 9.88,
          "cohort_sd": 5.39,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.3
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 5
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 7.2
            },
            {
              "raw": 3,
              "t_score": 37,
              "percentile": 10.1
            },
            {
              "raw": 4,
              "t_score": 39,
              "percentile": 13.8
            },
            {
              "raw": 5,
              "t_score": 41,
              "percentile": 18.3
            },
            {
              "raw": 6,
              "t_score": 43,
              "percentile": 23.6
            },
            {
              "raw": 7,
              "t_score": 45,
              "percentile": 29.7
            },
            {
              "raw": 8,
              "t_score": 47,
              "percentile": 36.4
            },
            {
              "raw": 9,
              "t_score": 48,
              "percentile": 43.5
            },
            {
              "raw": 10,
              "t_score": 50,
              "percentile": 50.9
            },
            {
              "raw": 11,
              "t_score": 52,
              "percentile": 58.2
            },
            {
              "raw": 12,
              "t_score": 54,
              "percentile": 65.3
            },
            {
              "raw": 13,
              "t_score": 56,
              "percentile": 71.9
            },
            {
              "raw": 14,
              "t_score": 58,
              "percentile": 77.8
            },
            {
              "raw": 15,
              "t_score": 59,
              "percentile": 82.9
            },
            {
              "raw": 16,
              "t_score": 61,
              "percentile": 87.2
            },
            {
              "raw": 17,
              "t_score": 63,
              "percentile": 90.7
            },
            {
              "raw": 18,
              "t_score": 65,
              "percentile": 93.4
            },
            {
              "raw": 19,
              "t_score": 67,
              "percentile": 95.5
            },
            {
              "raw": 20,
              "t_score": 69,
              "percentile": 97
            },
            {
              "raw": 21,
              "t_score": 71,
              "percentile": 98
            },
            {
              "raw": 22,
              "t_score": 72,
              "percentile": 98.8
            },
            {
              "raw": 23,
              "t_score": 74,
              "percentile": 99.3
            },
            {
              "raw": 24,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 25,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 26,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 82,
              "percentile": 99.9
            }
          ]
        },
        "F": {
          "scale_name": "DSM Hyperactive-Impulsive Symptoms",
          "max_raw": 27,
          "cohort_mean": 8.46,
          "cohort_sd": 5,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.5
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 6.8
            },
            {
              "raw": 2,
              "t_score": 37,
              "percentile": 9.8
            },
            {
              "raw": 3,
              "t_score": 39,
              "percentile": 13.8
            },
            {
              "raw": 4,
              "t_score": 41,
              "percentile": 18.6
            },
            {
              "raw": 5,
              "t_score": 43,
              "percentile": 24.5
            },
            {
              "raw": 6,
              "t_score": 45,
              "percentile": 31.2
            },
            {
              "raw": 7,
              "t_score": 47,
              "percentile": 38.5
            },
            {
              "raw": 8,
              "t_score": 49,
              "percentile": 46.4
            },
            {
              "raw": 9,
              "t_score": 51,
              "percentile": 54.3
            },
            {
              "raw": 10,
              "t_score": 53,
              "percentile": 62.1
            },
            {
              "raw": 11,
              "t_score": 55,
              "percentile": 69.5
            },
            {
              "raw": 12,
              "t_score": 57,
              "percentile": 76.1
            },
            {
              "raw": 13,
              "t_score": 59,
              "percentile": 81.8
            },
            {
              "raw": 14,
              "t_score": 61,
              "percentile": 86.6
            },
            {
              "raw": 15,
              "t_score": 63,
              "percentile": 90.5
            },
            {
              "raw": 16,
              "t_score": 65,
              "percentile": 93.4
            },
            {
              "raw": 17,
              "t_score": 67,
              "percentile": 95.6
            },
            {
              "raw": 18,
              "t_score": 69,
              "percentile": 97.2
            },
            {
              "raw": 19,
              "t_score": 71,
              "percentile": 98.3
            },
            {
              "raw": 20,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 21,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 22,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 23,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 24,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 25,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 26,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 87,
              "percentile": 99.9
            }
          ]
        },
        "G": {
          "scale_name": "Total ADHD Symptoms",
          "max_raw": 54,
          "cohort_mean": 18.34,
          "cohort_sd": 9.6,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 2.8
            },
            {
              "raw": 1,
              "t_score": 32,
              "percentile": 3.6
            },
            {
              "raw": 2,
              "t_score": 33,
              "percentile": 4.4
            },
            {
              "raw": 3,
              "t_score": 34,
              "percentile": 5.5
            },
            {
              "raw": 4,
              "t_score": 35,
              "percentile": 6.8
            },
            {
              "raw": 5,
              "t_score": 36,
              "percentile": 8.2
            },
            {
              "raw": 6,
              "t_score": 37,
              "percentile": 10
            },
            {
              "raw": 7,
              "t_score": 38,
              "percentile": 11.9
            },
            {
              "raw": 8,
              "t_score": 39,
              "percentile": 14.1
            },
            {
              "raw": 9,
              "t_score": 40,
              "percentile": 16.6
            },
            {
              "raw": 10,
              "t_score": 41,
              "percentile": 19.3
            },
            {
              "raw": 11,
              "t_score": 42,
              "percentile": 22.3
            },
            {
              "raw": 12,
              "t_score": 43,
              "percentile": 25.5
            },
            {
              "raw": 13,
              "t_score": 44,
              "percentile": 28.9
            },
            {
              "raw": 14,
              "t_score": 45,
              "percentile": 32.6
            },
            {
              "raw": 15,
              "t_score": 47,
              "percentile": 36.4
            },
            {
              "raw": 16,
              "t_score": 48,
              "percentile": 40.4
            },
            {
              "raw": 17,
              "t_score": 49,
              "percentile": 44.5
            },
            {
              "raw": 18,
              "t_score": 50,
              "percentile": 48.6
            },
            {
              "raw": 19,
              "t_score": 51,
              "percentile": 52.8
            },
            {
              "raw": 20,
              "t_score": 52,
              "percentile": 56.9
            },
            {
              "raw": 21,
              "t_score": 53,
              "percentile": 60.9
            },
            {
              "raw": 22,
              "t_score": 54,
              "percentile": 64.9
            },
            {
              "raw": 23,
              "t_score": 55,
              "percentile": 68.6
            },
            {
              "raw": 24,
              "t_score": 56,
              "percentile": 72.2
            },
            {
              "raw": 25,
              "t_score": 57,
              "percentile": 75.6
            },
            {
              "raw": 26,
              "t_score": 58,
              "percentile": 78.8
            },
            {
              "raw": 27,
              "t_score": 59,
              "percentile": 81.7
            },
            {
              "raw": 28,
              "t_score": 60,
              "percentile": 84.3
            },
            {
              "raw": 29,
              "t_score": 61,
              "percentile": 86.7
            },
            {
              "raw": 30,
              "t_score": 62,
              "percentile": 88.8
            },
            {
              "raw": 31,
              "t_score": 63,
              "percentile": 90.6
            },
            {
              "raw": 32,
              "t_score": 64,
              "percentile": 92.3
            },
            {
              "raw": 33,
              "t_score": 65,
              "percentile": 93.7
            },
            {
              "raw": 34,
              "t_score": 66,
              "percentile": 94.9
            },
            {
              "raw": 35,
              "t_score": 67,
              "percentile": 95.9
            },
            {
              "raw": 36,
              "t_score": 68,
              "percentile": 96.7
            },
            {
              "raw": 37,
              "t_score": 69,
              "percentile": 97.4
            },
            {
              "raw": 38,
              "t_score": 70,
              "percentile": 98
            },
            {
              "raw": 39,
              "t_score": 72,
              "percentile": 98.4
            },
            {
              "raw": 40,
              "t_score": 73,
              "percentile": 98.8
            },
            {
              "raw": 41,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 42,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 43,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 44,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 45,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 46,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 47,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 48,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 49,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 50,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 51,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 52,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 53,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 54,
              "t_score": 87,
              "percentile": 99.9
            }
          ]
        },
        "H": {
          "scale_name": "ADHD Index",
          "max_raw": 36,
          "cohort_mean": 12.16,
          "cohort_sd": 6.27,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 2.6
            },
            {
              "raw": 1,
              "t_score": 32,
              "percentile": 3.8
            },
            {
              "raw": 2,
              "t_score": 34,
              "percentile": 5.3
            },
            {
              "raw": 3,
              "t_score": 35,
              "percentile": 7.2
            },
            {
              "raw": 4,
              "t_score": 37,
              "percentile": 9.7
            },
            {
              "raw": 5,
              "t_score": 39,
              "percentile": 12.7
            },
            {
              "raw": 6,
              "t_score": 40,
              "percentile": 16.3
            },
            {
              "raw": 7,
              "t_score": 42,
              "percentile": 20.5
            },
            {
              "raw": 8,
              "t_score": 43,
              "percentile": 25.4
            },
            {
              "raw": 9,
              "t_score": 45,
              "percentile": 30.7
            },
            {
              "raw": 10,
              "t_score": 47,
              "percentile": 36.5
            },
            {
              "raw": 11,
              "t_score": 48,
              "percentile": 42.7
            },
            {
              "raw": 12,
              "t_score": 50,
              "percentile": 49
            },
            {
              "raw": 13,
              "t_score": 51,
              "percentile": 55.3
            },
            {
              "raw": 14,
              "t_score": 53,
              "percentile": 61.5
            },
            {
              "raw": 15,
              "t_score": 55,
              "percentile": 67.5
            },
            {
              "raw": 16,
              "t_score": 56,
              "percentile": 73
            },
            {
              "raw": 17,
              "t_score": 58,
              "percentile": 78
            },
            {
              "raw": 18,
              "t_score": 59,
              "percentile": 82.4
            },
            {
              "raw": 19,
              "t_score": 61,
              "percentile": 86.2
            },
            {
              "raw": 20,
              "t_score": 62,
              "percentile": 89.4
            },
            {
              "raw": 21,
              "t_score": 64,
              "percentile": 92.1
            },
            {
              "raw": 22,
              "t_score": 66,
              "percentile": 94.2
            },
            {
              "raw": 23,
              "t_score": 67,
              "percentile": 95.8
            },
            {
              "raw": 24,
              "t_score": 69,
              "percentile": 97
            },
            {
              "raw": 25,
              "t_score": 70,
              "percentile": 98
            },
            {
              "raw": 26,
              "t_score": 72,
              "percentile": 98.6
            },
            {
              "raw": 27,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 28,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 29,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 30,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 31,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 88,
              "percentile": 99.9
            }
          ]
        }
      },
      "50+": {
        "A": {
          "scale_name": "Inattention / Memory Problems",
          "max_raw": 36,
          "cohort_mean": 11.47,
          "cohort_sd": 6.26,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.3
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.7
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 6.5
            },
            {
              "raw": 3,
              "t_score": 36,
              "percentile": 8.8
            },
            {
              "raw": 4,
              "t_score": 38,
              "percentile": 11.6
            },
            {
              "raw": 5,
              "t_score": 40,
              "percentile": 15
            },
            {
              "raw": 6,
              "t_score": 41,
              "percentile": 19.1
            },
            {
              "raw": 7,
              "t_score": 43,
              "percentile": 23.7
            },
            {
              "raw": 8,
              "t_score": 44,
              "percentile": 28.9
            },
            {
              "raw": 9,
              "t_score": 46,
              "percentile": 34.6
            },
            {
              "raw": 10,
              "t_score": 48,
              "percentile": 40.7
            },
            {
              "raw": 11,
              "t_score": 49,
              "percentile": 47
            },
            {
              "raw": 12,
              "t_score": 51,
              "percentile": 53.3
            },
            {
              "raw": 13,
              "t_score": 52,
              "percentile": 59.6
            },
            {
              "raw": 14,
              "t_score": 54,
              "percentile": 65.7
            },
            {
              "raw": 15,
              "t_score": 56,
              "percentile": 71.3
            },
            {
              "raw": 16,
              "t_score": 57,
              "percentile": 76.5
            },
            {
              "raw": 17,
              "t_score": 59,
              "percentile": 81.1
            },
            {
              "raw": 18,
              "t_score": 60,
              "percentile": 85.2
            },
            {
              "raw": 19,
              "t_score": 62,
              "percentile": 88.5
            },
            {
              "raw": 20,
              "t_score": 64,
              "percentile": 91.4
            },
            {
              "raw": 21,
              "t_score": 65,
              "percentile": 93.6
            },
            {
              "raw": 22,
              "t_score": 67,
              "percentile": 95.4
            },
            {
              "raw": 23,
              "t_score": 68,
              "percentile": 96.7
            },
            {
              "raw": 24,
              "t_score": 70,
              "percentile": 97.7
            },
            {
              "raw": 25,
              "t_score": 72,
              "percentile": 98.5
            },
            {
              "raw": 26,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 27,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 28,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 29,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 30,
              "t_score": 80,
              "percentile": 99.8
            },
            {
              "raw": 31,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 89,
              "percentile": 99.9
            }
          ]
        },
        "B": {
          "scale_name": "Hyperactivity / Restlessness",
          "max_raw": 36,
          "cohort_mean": 9.52,
          "cohort_sd": 5.7,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.8
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 6.8
            },
            {
              "raw": 2,
              "t_score": 37,
              "percentile": 9.4
            },
            {
              "raw": 3,
              "t_score": 39,
              "percentile": 12.7
            },
            {
              "raw": 4,
              "t_score": 40,
              "percentile": 16.7
            },
            {
              "raw": 5,
              "t_score": 42,
              "percentile": 21.4
            },
            {
              "raw": 6,
              "t_score": 44,
              "percentile": 26.9
            },
            {
              "raw": 7,
              "t_score": 46,
              "percentile": 32.9
            },
            {
              "raw": 8,
              "t_score": 47,
              "percentile": 39.5
            },
            {
              "raw": 9,
              "t_score": 49,
              "percentile": 46.4
            },
            {
              "raw": 10,
              "t_score": 51,
              "percentile": 53.4
            },
            {
              "raw": 11,
              "t_score": 53,
              "percentile": 60.2
            },
            {
              "raw": 12,
              "t_score": 54,
              "percentile": 66.8
            },
            {
              "raw": 13,
              "t_score": 56,
              "percentile": 72.9
            },
            {
              "raw": 14,
              "t_score": 58,
              "percentile": 78.4
            },
            {
              "raw": 15,
              "t_score": 60,
              "percentile": 83.2
            },
            {
              "raw": 16,
              "t_score": 61,
              "percentile": 87.2
            },
            {
              "raw": 17,
              "t_score": 63,
              "percentile": 90.5
            },
            {
              "raw": 18,
              "t_score": 65,
              "percentile": 93.1
            },
            {
              "raw": 19,
              "t_score": 67,
              "percentile": 95.2
            },
            {
              "raw": 20,
              "t_score": 68,
              "percentile": 96.7
            },
            {
              "raw": 21,
              "t_score": 70,
              "percentile": 97.8
            },
            {
              "raw": 22,
              "t_score": 72,
              "percentile": 98.6
            },
            {
              "raw": 23,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 24,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 25,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 26,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 27,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 28,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 29,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "C": {
          "scale_name": "Impulsivity / Emotional Lability",
          "max_raw": 36,
          "cohort_mean": 10.29,
          "cohort_sd": 5.98,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.3
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 6
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 8.3
            },
            {
              "raw": 3,
              "t_score": 38,
              "percentile": 11.2
            },
            {
              "raw": 4,
              "t_score": 39,
              "percentile": 14.7
            },
            {
              "raw": 5,
              "t_score": 41,
              "percentile": 18.8
            },
            {
              "raw": 6,
              "t_score": 43,
              "percentile": 23.7
            },
            {
              "raw": 7,
              "t_score": 45,
              "percentile": 29.1
            },
            {
              "raw": 8,
              "t_score": 46,
              "percentile": 35.1
            },
            {
              "raw": 9,
              "t_score": 48,
              "percentile": 41.5
            },
            {
              "raw": 10,
              "t_score": 50,
              "percentile": 48.1
            },
            {
              "raw": 11,
              "t_score": 51,
              "percentile": 54.8
            },
            {
              "raw": 12,
              "t_score": 53,
              "percentile": 61.3
            },
            {
              "raw": 13,
              "t_score": 55,
              "percentile": 67.5
            },
            {
              "raw": 14,
              "t_score": 56,
              "percentile": 73.3
            },
            {
              "raw": 15,
              "t_score": 58,
              "percentile": 78.5
            },
            {
              "raw": 16,
              "t_score": 60,
              "percentile": 83
            },
            {
              "raw": 17,
              "t_score": 61,
              "percentile": 86.9
            },
            {
              "raw": 18,
              "t_score": 63,
              "percentile": 90.1
            },
            {
              "raw": 19,
              "t_score": 65,
              "percentile": 92.7
            },
            {
              "raw": 20,
              "t_score": 66,
              "percentile": 94.8
            },
            {
              "raw": 21,
              "t_score": 68,
              "percentile": 96.3
            },
            {
              "raw": 22,
              "t_score": 70,
              "percentile": 97.5
            },
            {
              "raw": 23,
              "t_score": 71,
              "percentile": 98.3
            },
            {
              "raw": 24,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 25,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 26,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 27,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 28,
              "t_score": 80,
              "percentile": 99.8
            },
            {
              "raw": 29,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "D": {
          "scale_name": "Problems with Self-Concept",
          "max_raw": 36,
          "cohort_mean": 8.33,
          "cohort_sd": 5.43,
          "lookup": [
            {
              "raw": 0,
              "t_score": 35,
              "percentile": 6.2
            },
            {
              "raw": 1,
              "t_score": 36,
              "percentile": 8.8
            },
            {
              "raw": 2,
              "t_score": 38,
              "percentile": 12.2
            },
            {
              "raw": 3,
              "t_score": 40,
              "percentile": 16.3
            },
            {
              "raw": 4,
              "t_score": 42,
              "percentile": 21.3
            },
            {
              "raw": 5,
              "t_score": 44,
              "percentile": 27
            },
            {
              "raw": 6,
              "t_score": 46,
              "percentile": 33.4
            },
            {
              "raw": 7,
              "t_score": 48,
              "percentile": 40.3
            },
            {
              "raw": 8,
              "t_score": 49,
              "percentile": 47.6
            },
            {
              "raw": 9,
              "t_score": 51,
              "percentile": 54.9
            },
            {
              "raw": 10,
              "t_score": 53,
              "percentile": 62.1
            },
            {
              "raw": 11,
              "t_score": 55,
              "percentile": 68.9
            },
            {
              "raw": 12,
              "t_score": 57,
              "percentile": 75.1
            },
            {
              "raw": 13,
              "t_score": 59,
              "percentile": 80.5
            },
            {
              "raw": 14,
              "t_score": 60,
              "percentile": 85.2
            },
            {
              "raw": 15,
              "t_score": 62,
              "percentile": 89
            },
            {
              "raw": 16,
              "t_score": 64,
              "percentile": 92.1
            },
            {
              "raw": 17,
              "t_score": 66,
              "percentile": 94.5
            },
            {
              "raw": 18,
              "t_score": 68,
              "percentile": 96.3
            },
            {
              "raw": 19,
              "t_score": 70,
              "percentile": 97.5
            },
            {
              "raw": 20,
              "t_score": 71,
              "percentile": 98.4
            },
            {
              "raw": 21,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 22,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 23,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 24,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 25,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 26,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 28,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 29,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "E": {
          "scale_name": "DSM Inattentive Symptoms",
          "max_raw": 27,
          "cohort_mean": 8.84,
          "cohort_sd": 5.06,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 6.1
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 8.8
            },
            {
              "raw": 3,
              "t_score": 38,
              "percentile": 12.4
            },
            {
              "raw": 4,
              "t_score": 40,
              "percentile": 16.9
            },
            {
              "raw": 5,
              "t_score": 42,
              "percentile": 22.4
            },
            {
              "raw": 6,
              "t_score": 44,
              "percentile": 28.7
            },
            {
              "raw": 7,
              "t_score": 46,
              "percentile": 35.8
            },
            {
              "raw": 8,
              "t_score": 48,
              "percentile": 43.4
            },
            {
              "raw": 9,
              "t_score": 50,
              "percentile": 51.3
            },
            {
              "raw": 10,
              "t_score": 52,
              "percentile": 59.1
            },
            {
              "raw": 11,
              "t_score": 54,
              "percentile": 66.5
            },
            {
              "raw": 12,
              "t_score": 56,
              "percentile": 73.4
            },
            {
              "raw": 13,
              "t_score": 58,
              "percentile": 79.4
            },
            {
              "raw": 14,
              "t_score": 60,
              "percentile": 84.6
            },
            {
              "raw": 15,
              "t_score": 62,
              "percentile": 88.8
            },
            {
              "raw": 16,
              "t_score": 64,
              "percentile": 92.1
            },
            {
              "raw": 17,
              "t_score": 66,
              "percentile": 94.7
            },
            {
              "raw": 18,
              "t_score": 68,
              "percentile": 96.5
            },
            {
              "raw": 19,
              "t_score": 70,
              "percentile": 97.8
            },
            {
              "raw": 20,
              "t_score": 72,
              "percentile": 98.6
            },
            {
              "raw": 21,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 22,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 23,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 24,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 25,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 26,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 86,
              "percentile": 99.9
            }
          ]
        },
        "F": {
          "scale_name": "DSM Hyperactive-Impulsive Symptoms",
          "max_raw": 27,
          "cohort_mean": 7.57,
          "cohort_sd": 4.69,
          "lookup": [
            {
              "raw": 0,
              "t_score": 34,
              "percentile": 5.3
            },
            {
              "raw": 1,
              "t_score": 36,
              "percentile": 8.1
            },
            {
              "raw": 2,
              "t_score": 38,
              "percentile": 11.8
            },
            {
              "raw": 3,
              "t_score": 40,
              "percentile": 16.5
            },
            {
              "raw": 4,
              "t_score": 42,
              "percentile": 22.4
            },
            {
              "raw": 5,
              "t_score": 45,
              "percentile": 29.2
            },
            {
              "raw": 6,
              "t_score": 47,
              "percentile": 36.9
            },
            {
              "raw": 7,
              "t_score": 49,
              "percentile": 45.2
            },
            {
              "raw": 8,
              "t_score": 51,
              "percentile": 53.7
            },
            {
              "raw": 9,
              "t_score": 53,
              "percentile": 62
            },
            {
              "raw": 10,
              "t_score": 55,
              "percentile": 69.8
            },
            {
              "raw": 11,
              "t_score": 57,
              "percentile": 76.8
            },
            {
              "raw": 12,
              "t_score": 59,
              "percentile": 82.8
            },
            {
              "raw": 13,
              "t_score": 62,
              "percentile": 87.7
            },
            {
              "raw": 14,
              "t_score": 64,
              "percentile": 91.5
            },
            {
              "raw": 15,
              "t_score": 66,
              "percentile": 94.3
            },
            {
              "raw": 16,
              "t_score": 68,
              "percentile": 96.4
            },
            {
              "raw": 17,
              "t_score": 70,
              "percentile": 97.8
            },
            {
              "raw": 18,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 19,
              "t_score": 74,
              "percentile": 99.3
            },
            {
              "raw": 20,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 21,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 22,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 23,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 24,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 25,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 26,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "G": {
          "scale_name": "Total ADHD Symptoms",
          "max_raw": 54,
          "cohort_mean": 16.41,
          "cohort_sd": 9.02,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.4
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.4
            },
            {
              "raw": 2,
              "t_score": 34,
              "percentile": 5.5
            },
            {
              "raw": 3,
              "t_score": 35,
              "percentile": 6.9
            },
            {
              "raw": 4,
              "t_score": 36,
              "percentile": 8.4
            },
            {
              "raw": 5,
              "t_score": 37,
              "percentile": 10.3
            },
            {
              "raw": 6,
              "t_score": 38,
              "percentile": 12.4
            },
            {
              "raw": 7,
              "t_score": 40,
              "percentile": 14.8
            },
            {
              "raw": 8,
              "t_score": 41,
              "percentile": 17.6
            },
            {
              "raw": 9,
              "t_score": 42,
              "percentile": 20.6
            },
            {
              "raw": 10,
              "t_score": 43,
              "percentile": 23.9
            },
            {
              "raw": 11,
              "t_score": 44,
              "percentile": 27.4
            },
            {
              "raw": 12,
              "t_score": 45,
              "percentile": 31.3
            },
            {
              "raw": 13,
              "t_score": 46,
              "percentile": 35.3
            },
            {
              "raw": 14,
              "t_score": 47,
              "percentile": 39.5
            },
            {
              "raw": 15,
              "t_score": 48,
              "percentile": 43.8
            },
            {
              "raw": 16,
              "t_score": 50,
              "percentile": 48.2
            },
            {
              "raw": 17,
              "t_score": 51,
              "percentile": 52.6
            },
            {
              "raw": 18,
              "t_score": 52,
              "percentile": 57
            },
            {
              "raw": 19,
              "t_score": 53,
              "percentile": 61.3
            },
            {
              "raw": 20,
              "t_score": 54,
              "percentile": 65.5
            },
            {
              "raw": 21,
              "t_score": 55,
              "percentile": 69.5
            },
            {
              "raw": 22,
              "t_score": 56,
              "percentile": 73.3
            },
            {
              "raw": 23,
              "t_score": 57,
              "percentile": 76.8
            },
            {
              "raw": 24,
              "t_score": 58,
              "percentile": 80
            },
            {
              "raw": 25,
              "t_score": 60,
              "percentile": 83
            },
            {
              "raw": 26,
              "t_score": 61,
              "percentile": 85.6
            },
            {
              "raw": 27,
              "t_score": 62,
              "percentile": 88
            },
            {
              "raw": 28,
              "t_score": 63,
              "percentile": 90.1
            },
            {
              "raw": 29,
              "t_score": 64,
              "percentile": 91.9
            },
            {
              "raw": 30,
              "t_score": 65,
              "percentile": 93.4
            },
            {
              "raw": 31,
              "t_score": 66,
              "percentile": 94.7
            },
            {
              "raw": 32,
              "t_score": 67,
              "percentile": 95.8
            },
            {
              "raw": 33,
              "t_score": 68,
              "percentile": 96.7
            },
            {
              "raw": 34,
              "t_score": 70,
              "percentile": 97.5
            },
            {
              "raw": 35,
              "t_score": 71,
              "percentile": 98
            },
            {
              "raw": 36,
              "t_score": 72,
              "percentile": 98.5
            },
            {
              "raw": 37,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 38,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 39,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 40,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 41,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 42,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 43,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 44,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 45,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 46,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 47,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 48,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 49,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 50,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 51,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 52,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 53,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 54,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "H": {
          "scale_name": "ADHD Index",
          "max_raw": 36,
          "cohort_mean": 10.88,
          "cohort_sd": 5.89,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.2
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.7
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 6.6
            },
            {
              "raw": 3,
              "t_score": 37,
              "percentile": 9
            },
            {
              "raw": 4,
              "t_score": 38,
              "percentile": 12.1
            },
            {
              "raw": 5,
              "t_score": 40,
              "percentile": 15.9
            },
            {
              "raw": 6,
              "t_score": 42,
              "percentile": 20.4
            },
            {
              "raw": 7,
              "t_score": 43,
              "percentile": 25.5
            },
            {
              "raw": 8,
              "t_score": 45,
              "percentile": 31.2
            },
            {
              "raw": 9,
              "t_score": 47,
              "percentile": 37.5
            },
            {
              "raw": 10,
              "t_score": 49,
              "percentile": 44.1
            },
            {
              "raw": 11,
              "t_score": 50,
              "percentile": 50.8
            },
            {
              "raw": 12,
              "t_score": 52,
              "percentile": 57.5
            },
            {
              "raw": 13,
              "t_score": 54,
              "percentile": 64.1
            },
            {
              "raw": 14,
              "t_score": 55,
              "percentile": 70.2
            },
            {
              "raw": 15,
              "t_score": 57,
              "percentile": 75.8
            },
            {
              "raw": 16,
              "t_score": 59,
              "percentile": 80.8
            },
            {
              "raw": 17,
              "t_score": 60,
              "percentile": 85.1
            },
            {
              "raw": 18,
              "t_score": 62,
              "percentile": 88.7
            },
            {
              "raw": 19,
              "t_score": 64,
              "percentile": 91.6
            },
            {
              "raw": 20,
              "t_score": 65,
              "percentile": 93.9
            },
            {
              "raw": 21,
              "t_score": 67,
              "percentile": 95.7
            },
            {
              "raw": 22,
              "t_score": 69,
              "percentile": 97.1
            },
            {
              "raw": 23,
              "t_score": 71,
              "percentile": 98
            },
            {
              "raw": 24,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 25,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 26,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 27,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 28,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 29,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        }
      }
    }
  },
  "observer": {
    "Male": {
      "18-29": {
        "A": {
          "scale_name": "Inattention / Memory Problems",
          "max_raw": 36,
          "cohort_mean": 13.47,
          "cohort_sd": 6.94,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 2.6
            },
            {
              "raw": 1,
              "t_score": 32,
              "percentile": 3.6
            },
            {
              "raw": 2,
              "t_score": 33,
              "percentile": 4.9
            },
            {
              "raw": 3,
              "t_score": 35,
              "percentile": 6.6
            },
            {
              "raw": 4,
              "t_score": 36,
              "percentile": 8.6
            },
            {
              "raw": 5,
              "t_score": 38,
              "percentile": 11.1
            },
            {
              "raw": 6,
              "t_score": 39,
              "percentile": 14.1
            },
            {
              "raw": 7,
              "t_score": 41,
              "percentile": 17.6
            },
            {
              "raw": 8,
              "t_score": 42,
              "percentile": 21.5
            },
            {
              "raw": 9,
              "t_score": 44,
              "percentile": 26
            },
            {
              "raw": 10,
              "t_score": 45,
              "percentile": 30.9
            },
            {
              "raw": 11,
              "t_score": 46,
              "percentile": 36.1
            },
            {
              "raw": 12,
              "t_score": 48,
              "percentile": 41.6
            },
            {
              "raw": 13,
              "t_score": 49,
              "percentile": 47.3
            },
            {
              "raw": 14,
              "t_score": 51,
              "percentile": 53.1
            },
            {
              "raw": 15,
              "t_score": 52,
              "percentile": 58.8
            },
            {
              "raw": 16,
              "t_score": 54,
              "percentile": 64.3
            },
            {
              "raw": 17,
              "t_score": 55,
              "percentile": 69.5
            },
            {
              "raw": 18,
              "t_score": 57,
              "percentile": 74.3
            },
            {
              "raw": 19,
              "t_score": 58,
              "percentile": 78.8
            },
            {
              "raw": 20,
              "t_score": 59,
              "percentile": 82.7
            },
            {
              "raw": 21,
              "t_score": 61,
              "percentile": 86.1
            },
            {
              "raw": 22,
              "t_score": 62,
              "percentile": 89.1
            },
            {
              "raw": 23,
              "t_score": 64,
              "percentile": 91.5
            },
            {
              "raw": 24,
              "t_score": 65,
              "percentile": 93.6
            },
            {
              "raw": 25,
              "t_score": 67,
              "percentile": 95.2
            },
            {
              "raw": 26,
              "t_score": 68,
              "percentile": 96.5
            },
            {
              "raw": 27,
              "t_score": 70,
              "percentile": 97.4
            },
            {
              "raw": 28,
              "t_score": 71,
              "percentile": 98.2
            },
            {
              "raw": 29,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 30,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 31,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 32,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 33,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 34,
              "t_score": 80,
              "percentile": 99.8
            },
            {
              "raw": 35,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 82,
              "percentile": 99.9
            }
          ]
        },
        "B": {
          "scale_name": "Hyperactivity / Restlessness",
          "max_raw": 36,
          "cohort_mean": 11.17,
          "cohort_sd": 6.32,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.9
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 5.4
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 7.3
            },
            {
              "raw": 3,
              "t_score": 37,
              "percentile": 9.8
            },
            {
              "raw": 4,
              "t_score": 39,
              "percentile": 12.8
            },
            {
              "raw": 5,
              "t_score": 40,
              "percentile": 16.5
            },
            {
              "raw": 6,
              "t_score": 42,
              "percentile": 20.7
            },
            {
              "raw": 7,
              "t_score": 43,
              "percentile": 25.5
            },
            {
              "raw": 8,
              "t_score": 45,
              "percentile": 30.8
            },
            {
              "raw": 9,
              "t_score": 47,
              "percentile": 36.6
            },
            {
              "raw": 10,
              "t_score": 48,
              "percentile": 42.6
            },
            {
              "raw": 11,
              "t_score": 50,
              "percentile": 48.9
            },
            {
              "raw": 12,
              "t_score": 51,
              "percentile": 55.2
            },
            {
              "raw": 13,
              "t_score": 53,
              "percentile": 61.4
            },
            {
              "raw": 14,
              "t_score": 54,
              "percentile": 67.3
            },
            {
              "raw": 15,
              "t_score": 56,
              "percentile": 72.8
            },
            {
              "raw": 16,
              "t_score": 58,
              "percentile": 77.7
            },
            {
              "raw": 17,
              "t_score": 59,
              "percentile": 82.2
            },
            {
              "raw": 18,
              "t_score": 61,
              "percentile": 86
            },
            {
              "raw": 19,
              "t_score": 62,
              "percentile": 89.2
            },
            {
              "raw": 20,
              "t_score": 64,
              "percentile": 91.9
            },
            {
              "raw": 21,
              "t_score": 66,
              "percentile": 94
            },
            {
              "raw": 22,
              "t_score": 67,
              "percentile": 95.7
            },
            {
              "raw": 23,
              "t_score": 69,
              "percentile": 96.9
            },
            {
              "raw": 24,
              "t_score": 70,
              "percentile": 97.9
            },
            {
              "raw": 25,
              "t_score": 72,
              "percentile": 98.6
            },
            {
              "raw": 26,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 27,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 28,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 29,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 30,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 89,
              "percentile": 99.9
            }
          ]
        },
        "C": {
          "scale_name": "Impulsivity / Emotional Lability",
          "max_raw": 36,
          "cohort_mean": 12.07,
          "cohort_sd": 6.63,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.4
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.7
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 6.4
            },
            {
              "raw": 3,
              "t_score": 36,
              "percentile": 8.6
            },
            {
              "raw": 4,
              "t_score": 38,
              "percentile": 11.2
            },
            {
              "raw": 5,
              "t_score": 39,
              "percentile": 14.3
            },
            {
              "raw": 6,
              "t_score": 41,
              "percentile": 18
            },
            {
              "raw": 7,
              "t_score": 42,
              "percentile": 22.2
            },
            {
              "raw": 8,
              "t_score": 44,
              "percentile": 27
            },
            {
              "raw": 9,
              "t_score": 45,
              "percentile": 32.2
            },
            {
              "raw": 10,
              "t_score": 47,
              "percentile": 37.7
            },
            {
              "raw": 11,
              "t_score": 48,
              "percentile": 43.6
            },
            {
              "raw": 12,
              "t_score": 50,
              "percentile": 49.6
            },
            {
              "raw": 13,
              "t_score": 51,
              "percentile": 55.6
            },
            {
              "raw": 14,
              "t_score": 53,
              "percentile": 61.5
            },
            {
              "raw": 15,
              "t_score": 54,
              "percentile": 67.1
            },
            {
              "raw": 16,
              "t_score": 56,
              "percentile": 72.3
            },
            {
              "raw": 17,
              "t_score": 57,
              "percentile": 77.1
            },
            {
              "raw": 18,
              "t_score": 59,
              "percentile": 81.4
            },
            {
              "raw": 19,
              "t_score": 60,
              "percentile": 85.2
            },
            {
              "raw": 20,
              "t_score": 62,
              "percentile": 88.4
            },
            {
              "raw": 21,
              "t_score": 63,
              "percentile": 91.1
            },
            {
              "raw": 22,
              "t_score": 65,
              "percentile": 93.3
            },
            {
              "raw": 23,
              "t_score": 66,
              "percentile": 95
            },
            {
              "raw": 24,
              "t_score": 68,
              "percentile": 96.4
            },
            {
              "raw": 25,
              "t_score": 70,
              "percentile": 97.4
            },
            {
              "raw": 26,
              "t_score": 71,
              "percentile": 98.2
            },
            {
              "raw": 27,
              "t_score": 73,
              "percentile": 98.8
            },
            {
              "raw": 28,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 29,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 30,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 31,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 32,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 86,
              "percentile": 99.9
            }
          ]
        },
        "D": {
          "scale_name": "Problems with Self-Concept",
          "max_raw": 36,
          "cohort_mean": 9.78,
          "cohort_sd": 6.02,
          "lookup": [
            {
              "raw": 0,
              "t_score": 34,
              "percentile": 5.2
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 7.2
            },
            {
              "raw": 2,
              "t_score": 37,
              "percentile": 9.8
            },
            {
              "raw": 3,
              "t_score": 39,
              "percentile": 13
            },
            {
              "raw": 4,
              "t_score": 40,
              "percentile": 16.9
            },
            {
              "raw": 5,
              "t_score": 42,
              "percentile": 21.4
            },
            {
              "raw": 6,
              "t_score": 44,
              "percentile": 26.5
            },
            {
              "raw": 7,
              "t_score": 45,
              "percentile": 32.2
            },
            {
              "raw": 8,
              "t_score": 47,
              "percentile": 38.4
            },
            {
              "raw": 9,
              "t_score": 49,
              "percentile": 44.9
            },
            {
              "raw": 10,
              "t_score": 50,
              "percentile": 51.5
            },
            {
              "raw": 11,
              "t_score": 52,
              "percentile": 58.1
            },
            {
              "raw": 12,
              "t_score": 54,
              "percentile": 64.4
            },
            {
              "raw": 13,
              "t_score": 55,
              "percentile": 70.4
            },
            {
              "raw": 14,
              "t_score": 57,
              "percentile": 75.9
            },
            {
              "raw": 15,
              "t_score": 59,
              "percentile": 80.7
            },
            {
              "raw": 16,
              "t_score": 60,
              "percentile": 85
            },
            {
              "raw": 17,
              "t_score": 62,
              "percentile": 88.5
            },
            {
              "raw": 18,
              "t_score": 64,
              "percentile": 91.4
            },
            {
              "raw": 19,
              "t_score": 65,
              "percentile": 93.7
            },
            {
              "raw": 20,
              "t_score": 67,
              "percentile": 95.5
            },
            {
              "raw": 21,
              "t_score": 69,
              "percentile": 96.9
            },
            {
              "raw": 22,
              "t_score": 70,
              "percentile": 97.9
            },
            {
              "raw": 23,
              "t_score": 72,
              "percentile": 98.6
            },
            {
              "raw": 24,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 25,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 26,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 27,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 28,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 29,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "E": {
          "scale_name": "DSM Inattentive Symptoms",
          "max_raw": 27,
          "cohort_mean": 10.37,
          "cohort_sd": 5.61,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.2
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.7
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 6.8
            },
            {
              "raw": 3,
              "t_score": 37,
              "percentile": 9.4
            },
            {
              "raw": 4,
              "t_score": 39,
              "percentile": 12.8
            },
            {
              "raw": 5,
              "t_score": 40,
              "percentile": 16.9
            },
            {
              "raw": 6,
              "t_score": 42,
              "percentile": 21.8
            },
            {
              "raw": 7,
              "t_score": 44,
              "percentile": 27.4
            },
            {
              "raw": 8,
              "t_score": 46,
              "percentile": 33.6
            },
            {
              "raw": 9,
              "t_score": 48,
              "percentile": 40.3
            },
            {
              "raw": 10,
              "t_score": 49,
              "percentile": 47.3
            },
            {
              "raw": 11,
              "t_score": 51,
              "percentile": 54.4
            },
            {
              "raw": 12,
              "t_score": 53,
              "percentile": 61.4
            },
            {
              "raw": 13,
              "t_score": 55,
              "percentile": 68
            },
            {
              "raw": 14,
              "t_score": 56,
              "percentile": 74.1
            },
            {
              "raw": 15,
              "t_score": 58,
              "percentile": 79.5
            },
            {
              "raw": 16,
              "t_score": 60,
              "percentile": 84.2
            },
            {
              "raw": 17,
              "t_score": 62,
              "percentile": 88.1
            },
            {
              "raw": 18,
              "t_score": 64,
              "percentile": 91.3
            },
            {
              "raw": 19,
              "t_score": 65,
              "percentile": 93.8
            },
            {
              "raw": 20,
              "t_score": 67,
              "percentile": 95.7
            },
            {
              "raw": 21,
              "t_score": 69,
              "percentile": 97.1
            },
            {
              "raw": 22,
              "t_score": 71,
              "percentile": 98.1
            },
            {
              "raw": 23,
              "t_score": 73,
              "percentile": 98.8
            },
            {
              "raw": 24,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 25,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 26,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 27,
              "t_score": 80,
              "percentile": 99.8
            }
          ]
        },
        "F": {
          "scale_name": "DSM Hyperactive-Impulsive Symptoms",
          "max_raw": 27,
          "cohort_mean": 8.88,
          "cohort_sd": 5.2,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.4
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 6.5
            },
            {
              "raw": 2,
              "t_score": 37,
              "percentile": 9.3
            },
            {
              "raw": 3,
              "t_score": 39,
              "percentile": 12.9
            },
            {
              "raw": 4,
              "t_score": 41,
              "percentile": 17.4
            },
            {
              "raw": 5,
              "t_score": 43,
              "percentile": 22.8
            },
            {
              "raw": 6,
              "t_score": 44,
              "percentile": 29
            },
            {
              "raw": 7,
              "t_score": 46,
              "percentile": 35.9
            },
            {
              "raw": 8,
              "t_score": 48,
              "percentile": 43.3
            },
            {
              "raw": 9,
              "t_score": 50,
              "percentile": 50.9
            },
            {
              "raw": 10,
              "t_score": 52,
              "percentile": 58.5
            },
            {
              "raw": 11,
              "t_score": 54,
              "percentile": 65.8
            },
            {
              "raw": 12,
              "t_score": 56,
              "percentile": 72.6
            },
            {
              "raw": 13,
              "t_score": 58,
              "percentile": 78.6
            },
            {
              "raw": 14,
              "t_score": 60,
              "percentile": 83.8
            },
            {
              "raw": 15,
              "t_score": 62,
              "percentile": 88
            },
            {
              "raw": 16,
              "t_score": 64,
              "percentile": 91.5
            },
            {
              "raw": 17,
              "t_score": 66,
              "percentile": 94.1
            },
            {
              "raw": 18,
              "t_score": 68,
              "percentile": 96
            },
            {
              "raw": 19,
              "t_score": 69,
              "percentile": 97.4
            },
            {
              "raw": 20,
              "t_score": 71,
              "percentile": 98.4
            },
            {
              "raw": 21,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 22,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 23,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 24,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 25,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 26,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 85,
              "percentile": 99.9
            }
          ]
        },
        "G": {
          "scale_name": "Total ADHD Symptoms",
          "max_raw": 54,
          "cohort_mean": 19.25,
          "cohort_sd": 10,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 2.7
            },
            {
              "raw": 1,
              "t_score": 32,
              "percentile": 3.4
            },
            {
              "raw": 2,
              "t_score": 33,
              "percentile": 4.2
            },
            {
              "raw": 3,
              "t_score": 34,
              "percentile": 5.2
            },
            {
              "raw": 4,
              "t_score": 35,
              "percentile": 6.4
            },
            {
              "raw": 5,
              "t_score": 36,
              "percentile": 7.7
            },
            {
              "raw": 6,
              "t_score": 37,
              "percentile": 9.2
            },
            {
              "raw": 7,
              "t_score": 38,
              "percentile": 11
            },
            {
              "raw": 8,
              "t_score": 39,
              "percentile": 13
            },
            {
              "raw": 9,
              "t_score": 40,
              "percentile": 15.3
            },
            {
              "raw": 10,
              "t_score": 41,
              "percentile": 17.7
            },
            {
              "raw": 11,
              "t_score": 42,
              "percentile": 20.5
            },
            {
              "raw": 12,
              "t_score": 43,
              "percentile": 23.4
            },
            {
              "raw": 13,
              "t_score": 44,
              "percentile": 26.6
            },
            {
              "raw": 14,
              "t_score": 45,
              "percentile": 30
            },
            {
              "raw": 15,
              "t_score": 46,
              "percentile": 33.5
            },
            {
              "raw": 16,
              "t_score": 47,
              "percentile": 37.2
            },
            {
              "raw": 17,
              "t_score": 48,
              "percentile": 41.1
            },
            {
              "raw": 18,
              "t_score": 49,
              "percentile": 45
            },
            {
              "raw": 19,
              "t_score": 50,
              "percentile": 49
            },
            {
              "raw": 20,
              "t_score": 51,
              "percentile": 53
            },
            {
              "raw": 21,
              "t_score": 52,
              "percentile": 56.9
            },
            {
              "raw": 22,
              "t_score": 53,
              "percentile": 60.8
            },
            {
              "raw": 23,
              "t_score": 54,
              "percentile": 64.6
            },
            {
              "raw": 24,
              "t_score": 55,
              "percentile": 68.3
            },
            {
              "raw": 25,
              "t_score": 56,
              "percentile": 71.7
            },
            {
              "raw": 26,
              "t_score": 57,
              "percentile": 75
            },
            {
              "raw": 27,
              "t_score": 58,
              "percentile": 78.1
            },
            {
              "raw": 28,
              "t_score": 59,
              "percentile": 80.9
            },
            {
              "raw": 29,
              "t_score": 60,
              "percentile": 83.5
            },
            {
              "raw": 30,
              "t_score": 61,
              "percentile": 85.9
            },
            {
              "raw": 31,
              "t_score": 62,
              "percentile": 88
            },
            {
              "raw": 32,
              "t_score": 63,
              "percentile": 89.9
            },
            {
              "raw": 33,
              "t_score": 64,
              "percentile": 91.5
            },
            {
              "raw": 34,
              "t_score": 65,
              "percentile": 93
            },
            {
              "raw": 35,
              "t_score": 66,
              "percentile": 94.2
            },
            {
              "raw": 36,
              "t_score": 67,
              "percentile": 95.3
            },
            {
              "raw": 37,
              "t_score": 68,
              "percentile": 96.2
            },
            {
              "raw": 38,
              "t_score": 69,
              "percentile": 97
            },
            {
              "raw": 39,
              "t_score": 70,
              "percentile": 97.6
            },
            {
              "raw": 40,
              "t_score": 71,
              "percentile": 98.1
            },
            {
              "raw": 41,
              "t_score": 72,
              "percentile": 98.5
            },
            {
              "raw": 42,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 43,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 44,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 45,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 46,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 47,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 48,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 49,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 50,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 51,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 52,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 53,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 54,
              "t_score": 85,
              "percentile": 99.9
            }
          ]
        },
        "H": {
          "scale_name": "ADHD Index",
          "max_raw": 36,
          "cohort_mean": 12.77,
          "cohort_sd": 6.53,
          "lookup": [
            {
              "raw": 0,
              "t_score": 30,
              "percentile": 2.5
            },
            {
              "raw": 1,
              "t_score": 32,
              "percentile": 3.6
            },
            {
              "raw": 2,
              "t_score": 34,
              "percentile": 5
            },
            {
              "raw": 3,
              "t_score": 35,
              "percentile": 6.7
            },
            {
              "raw": 4,
              "t_score": 37,
              "percentile": 9
            },
            {
              "raw": 5,
              "t_score": 38,
              "percentile": 11.7
            },
            {
              "raw": 6,
              "t_score": 40,
              "percentile": 15
            },
            {
              "raw": 7,
              "t_score": 41,
              "percentile": 18.8
            },
            {
              "raw": 8,
              "t_score": 43,
              "percentile": 23.3
            },
            {
              "raw": 9,
              "t_score": 44,
              "percentile": 28.2
            },
            {
              "raw": 10,
              "t_score": 46,
              "percentile": 33.6
            },
            {
              "raw": 11,
              "t_score": 47,
              "percentile": 39.3
            },
            {
              "raw": 12,
              "t_score": 49,
              "percentile": 45.3
            },
            {
              "raw": 13,
              "t_score": 50,
              "percentile": 51.4
            },
            {
              "raw": 14,
              "t_score": 52,
              "percentile": 57.5
            },
            {
              "raw": 15,
              "t_score": 53,
              "percentile": 63.4
            },
            {
              "raw": 16,
              "t_score": 55,
              "percentile": 69
            },
            {
              "raw": 17,
              "t_score": 56,
              "percentile": 74.2
            },
            {
              "raw": 18,
              "t_score": 58,
              "percentile": 78.9
            },
            {
              "raw": 19,
              "t_score": 60,
              "percentile": 83
            },
            {
              "raw": 20,
              "t_score": 61,
              "percentile": 86.6
            },
            {
              "raw": 21,
              "t_score": 63,
              "percentile": 89.6
            },
            {
              "raw": 22,
              "t_score": 64,
              "percentile": 92.1
            },
            {
              "raw": 23,
              "t_score": 66,
              "percentile": 94.1
            },
            {
              "raw": 24,
              "t_score": 67,
              "percentile": 95.7
            },
            {
              "raw": 25,
              "t_score": 69,
              "percentile": 97
            },
            {
              "raw": 26,
              "t_score": 70,
              "percentile": 97.9
            },
            {
              "raw": 27,
              "t_score": 72,
              "percentile": 98.5
            },
            {
              "raw": 28,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 29,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 30,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 31,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 32,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 33,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 86,
              "percentile": 99.9
            }
          ]
        }
      },
      "30-49": {
        "A": {
          "scale_name": "Inattention / Memory Problems",
          "max_raw": 36,
          "cohort_mean": 12.82,
          "cohort_sd": 6.8,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 3
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.1
            },
            {
              "raw": 2,
              "t_score": 34,
              "percentile": 5.6
            },
            {
              "raw": 3,
              "t_score": 36,
              "percentile": 7.4
            },
            {
              "raw": 4,
              "t_score": 37,
              "percentile": 9.7
            },
            {
              "raw": 5,
              "t_score": 38,
              "percentile": 12.5
            },
            {
              "raw": 6,
              "t_score": 40,
              "percentile": 15.8
            },
            {
              "raw": 7,
              "t_score": 41,
              "percentile": 19.6
            },
            {
              "raw": 8,
              "t_score": 43,
              "percentile": 23.9
            },
            {
              "raw": 9,
              "t_score": 44,
              "percentile": 28.7
            },
            {
              "raw": 10,
              "t_score": 46,
              "percentile": 33.9
            },
            {
              "raw": 11,
              "t_score": 47,
              "percentile": 39.4
            },
            {
              "raw": 12,
              "t_score": 49,
              "percentile": 45.2
            },
            {
              "raw": 13,
              "t_score": 50,
              "percentile": 51
            },
            {
              "raw": 14,
              "t_score": 52,
              "percentile": 56.9
            },
            {
              "raw": 15,
              "t_score": 53,
              "percentile": 62.5
            },
            {
              "raw": 16,
              "t_score": 55,
              "percentile": 68
            },
            {
              "raw": 17,
              "t_score": 56,
              "percentile": 73
            },
            {
              "raw": 18,
              "t_score": 58,
              "percentile": 77.7
            },
            {
              "raw": 19,
              "t_score": 59,
              "percentile": 81.8
            },
            {
              "raw": 20,
              "t_score": 61,
              "percentile": 85.4
            },
            {
              "raw": 21,
              "t_score": 62,
              "percentile": 88.5
            },
            {
              "raw": 22,
              "t_score": 63,
              "percentile": 91.1
            },
            {
              "raw": 23,
              "t_score": 65,
              "percentile": 93.3
            },
            {
              "raw": 24,
              "t_score": 66,
              "percentile": 95
            },
            {
              "raw": 25,
              "t_score": 68,
              "percentile": 96.3
            },
            {
              "raw": 26,
              "t_score": 69,
              "percentile": 97.4
            },
            {
              "raw": 27,
              "t_score": 71,
              "percentile": 98.1
            },
            {
              "raw": 28,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 29,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 30,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 31,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 32,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 33,
              "t_score": 80,
              "percentile": 99.8
            },
            {
              "raw": 34,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 84,
              "percentile": 99.9
            }
          ]
        },
        "B": {
          "scale_name": "Hyperactivity / Restlessness",
          "max_raw": 36,
          "cohort_mean": 10.64,
          "cohort_sd": 6.2,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.3
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 6
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 8.2
            },
            {
              "raw": 3,
              "t_score": 38,
              "percentile": 10.9
            },
            {
              "raw": 4,
              "t_score": 39,
              "percentile": 14.2
            },
            {
              "raw": 5,
              "t_score": 41,
              "percentile": 18.1
            },
            {
              "raw": 6,
              "t_score": 43,
              "percentile": 22.7
            },
            {
              "raw": 7,
              "t_score": 44,
              "percentile": 27.9
            },
            {
              "raw": 8,
              "t_score": 46,
              "percentile": 33.5
            },
            {
              "raw": 9,
              "t_score": 47,
              "percentile": 39.6
            },
            {
              "raw": 10,
              "t_score": 49,
              "percentile": 45.9
            },
            {
              "raw": 11,
              "t_score": 51,
              "percentile": 52.3
            },
            {
              "raw": 12,
              "t_score": 52,
              "percentile": 58.7
            },
            {
              "raw": 13,
              "t_score": 54,
              "percentile": 64.8
            },
            {
              "raw": 14,
              "t_score": 55,
              "percentile": 70.6
            },
            {
              "raw": 15,
              "t_score": 57,
              "percentile": 75.9
            },
            {
              "raw": 16,
              "t_score": 59,
              "percentile": 80.6
            },
            {
              "raw": 17,
              "t_score": 60,
              "percentile": 84.8
            },
            {
              "raw": 18,
              "t_score": 62,
              "percentile": 88.2
            },
            {
              "raw": 19,
              "t_score": 63,
              "percentile": 91.1
            },
            {
              "raw": 20,
              "t_score": 65,
              "percentile": 93.4
            },
            {
              "raw": 21,
              "t_score": 67,
              "percentile": 95.3
            },
            {
              "raw": 22,
              "t_score": 68,
              "percentile": 96.7
            },
            {
              "raw": 23,
              "t_score": 70,
              "percentile": 97.7
            },
            {
              "raw": 24,
              "t_score": 72,
              "percentile": 98.4
            },
            {
              "raw": 25,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 26,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 27,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 28,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 29,
              "t_score": 80,
              "percentile": 99.8
            },
            {
              "raw": 30,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "C": {
          "scale_name": "Impulsivity / Emotional Lability",
          "max_raw": 36,
          "cohort_mean": 11.49,
          "cohort_sd": 6.5,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.8
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 5.3
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 7.2
            },
            {
              "raw": 3,
              "t_score": 37,
              "percentile": 9.6
            },
            {
              "raw": 4,
              "t_score": 38,
              "percentile": 12.4
            },
            {
              "raw": 5,
              "t_score": 40,
              "percentile": 15.9
            },
            {
              "raw": 6,
              "t_score": 42,
              "percentile": 19.9
            },
            {
              "raw": 7,
              "t_score": 43,
              "percentile": 24.5
            },
            {
              "raw": 8,
              "t_score": 45,
              "percentile": 29.5
            },
            {
              "raw": 9,
              "t_score": 46,
              "percentile": 35.1
            },
            {
              "raw": 10,
              "t_score": 48,
              "percentile": 40.9
            },
            {
              "raw": 11,
              "t_score": 49,
              "percentile": 47
            },
            {
              "raw": 12,
              "t_score": 51,
              "percentile": 53.1
            },
            {
              "raw": 13,
              "t_score": 52,
              "percentile": 59.2
            },
            {
              "raw": 14,
              "t_score": 54,
              "percentile": 65
            },
            {
              "raw": 15,
              "t_score": 55,
              "percentile": 70.5
            },
            {
              "raw": 16,
              "t_score": 57,
              "percentile": 75.6
            },
            {
              "raw": 17,
              "t_score": 58,
              "percentile": 80.1
            },
            {
              "raw": 18,
              "t_score": 60,
              "percentile": 84.2
            },
            {
              "raw": 19,
              "t_score": 62,
              "percentile": 87.6
            },
            {
              "raw": 20,
              "t_score": 63,
              "percentile": 90.5
            },
            {
              "raw": 21,
              "t_score": 65,
              "percentile": 92.8
            },
            {
              "raw": 22,
              "t_score": 66,
              "percentile": 94.7
            },
            {
              "raw": 23,
              "t_score": 68,
              "percentile": 96.2
            },
            {
              "raw": 24,
              "t_score": 69,
              "percentile": 97.3
            },
            {
              "raw": 25,
              "t_score": 71,
              "percentile": 98.1
            },
            {
              "raw": 26,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 27,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 28,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 29,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 30,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 31,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 88,
              "percentile": 99.9
            }
          ]
        },
        "D": {
          "scale_name": "Problems with Self-Concept",
          "max_raw": 36,
          "cohort_mean": 9.31,
          "cohort_sd": 5.9,
          "lookup": [
            {
              "raw": 0,
              "t_score": 34,
              "percentile": 5.7
            },
            {
              "raw": 1,
              "t_score": 36,
              "percentile": 7.9
            },
            {
              "raw": 2,
              "t_score": 38,
              "percentile": 10.8
            },
            {
              "raw": 3,
              "t_score": 39,
              "percentile": 14.2
            },
            {
              "raw": 4,
              "t_score": 41,
              "percentile": 18.4
            },
            {
              "raw": 5,
              "t_score": 43,
              "percentile": 23.3
            },
            {
              "raw": 6,
              "t_score": 44,
              "percentile": 28.7
            },
            {
              "raw": 7,
              "t_score": 46,
              "percentile": 34.8
            },
            {
              "raw": 8,
              "t_score": 48,
              "percentile": 41.2
            },
            {
              "raw": 9,
              "t_score": 49,
              "percentile": 47.9
            },
            {
              "raw": 10,
              "t_score": 51,
              "percentile": 54.7
            },
            {
              "raw": 11,
              "t_score": 53,
              "percentile": 61.3
            },
            {
              "raw": 12,
              "t_score": 55,
              "percentile": 67.6
            },
            {
              "raw": 13,
              "t_score": 56,
              "percentile": 73.4
            },
            {
              "raw": 14,
              "t_score": 58,
              "percentile": 78.7
            },
            {
              "raw": 15,
              "t_score": 60,
              "percentile": 83.3
            },
            {
              "raw": 16,
              "t_score": 61,
              "percentile": 87.2
            },
            {
              "raw": 17,
              "t_score": 63,
              "percentile": 90.4
            },
            {
              "raw": 18,
              "t_score": 65,
              "percentile": 93
            },
            {
              "raw": 19,
              "t_score": 66,
              "percentile": 95
            },
            {
              "raw": 20,
              "t_score": 68,
              "percentile": 96.5
            },
            {
              "raw": 21,
              "t_score": 70,
              "percentile": 97.6
            },
            {
              "raw": 22,
              "t_score": 72,
              "percentile": 98.4
            },
            {
              "raw": 23,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 24,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 25,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 26,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 27,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 28,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 29,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "E": {
          "scale_name": "DSM Inattentive Symptoms",
          "max_raw": 27,
          "cohort_mean": 9.88,
          "cohort_sd": 5.5,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.6
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 5.3
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 7.6
            },
            {
              "raw": 3,
              "t_score": 37,
              "percentile": 10.5
            },
            {
              "raw": 4,
              "t_score": 39,
              "percentile": 14.3
            },
            {
              "raw": 5,
              "t_score": 41,
              "percentile": 18.7
            },
            {
              "raw": 6,
              "t_score": 43,
              "percentile": 24
            },
            {
              "raw": 7,
              "t_score": 45,
              "percentile": 30
            },
            {
              "raw": 8,
              "t_score": 47,
              "percentile": 36.6
            },
            {
              "raw": 9,
              "t_score": 48,
              "percentile": 43.6
            },
            {
              "raw": 10,
              "t_score": 50,
              "percentile": 50.9
            },
            {
              "raw": 11,
              "t_score": 52,
              "percentile": 58.1
            },
            {
              "raw": 12,
              "t_score": 54,
              "percentile": 65
            },
            {
              "raw": 13,
              "t_score": 56,
              "percentile": 71.5
            },
            {
              "raw": 14,
              "t_score": 57,
              "percentile": 77.3
            },
            {
              "raw": 15,
              "t_score": 59,
              "percentile": 82.4
            },
            {
              "raw": 16,
              "t_score": 61,
              "percentile": 86.7
            },
            {
              "raw": 17,
              "t_score": 63,
              "percentile": 90.2
            },
            {
              "raw": 18,
              "t_score": 65,
              "percentile": 93
            },
            {
              "raw": 19,
              "t_score": 67,
              "percentile": 95.1
            },
            {
              "raw": 20,
              "t_score": 68,
              "percentile": 96.7
            },
            {
              "raw": 21,
              "t_score": 70,
              "percentile": 97.8
            },
            {
              "raw": 22,
              "t_score": 72,
              "percentile": 98.6
            },
            {
              "raw": 23,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 24,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 25,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 26,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 27,
              "t_score": 81,
              "percentile": 99.9
            }
          ]
        },
        "F": {
          "scale_name": "DSM Hyperactive-Impulsive Symptoms",
          "max_raw": 27,
          "cohort_mean": 8.46,
          "cohort_sd": 5.1,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.9
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 7.2
            },
            {
              "raw": 2,
              "t_score": 37,
              "percentile": 10.3
            },
            {
              "raw": 3,
              "t_score": 39,
              "percentile": 14.2
            },
            {
              "raw": 4,
              "t_score": 41,
              "percentile": 19.1
            },
            {
              "raw": 5,
              "t_score": 43,
              "percentile": 24.9
            },
            {
              "raw": 6,
              "t_score": 45,
              "percentile": 31.5
            },
            {
              "raw": 7,
              "t_score": 47,
              "percentile": 38.8
            },
            {
              "raw": 8,
              "t_score": 49,
              "percentile": 46.4
            },
            {
              "raw": 9,
              "t_score": 51,
              "percentile": 54.3
            },
            {
              "raw": 10,
              "t_score": 53,
              "percentile": 61.9
            },
            {
              "raw": 11,
              "t_score": 55,
              "percentile": 69.1
            },
            {
              "raw": 12,
              "t_score": 57,
              "percentile": 75.7
            },
            {
              "raw": 13,
              "t_score": 59,
              "percentile": 81.4
            },
            {
              "raw": 14,
              "t_score": 61,
              "percentile": 86.2
            },
            {
              "raw": 15,
              "t_score": 63,
              "percentile": 90
            },
            {
              "raw": 16,
              "t_score": 65,
              "percentile": 93
            },
            {
              "raw": 17,
              "t_score": 67,
              "percentile": 95.3
            },
            {
              "raw": 18,
              "t_score": 69,
              "percentile": 96.9
            },
            {
              "raw": 19,
              "t_score": 71,
              "percentile": 98.1
            },
            {
              "raw": 20,
              "t_score": 73,
              "percentile": 98.8
            },
            {
              "raw": 21,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 22,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 23,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 24,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 25,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 26,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 86,
              "percentile": 99.9
            }
          ]
        },
        "G": {
          "scale_name": "Total ADHD Symptoms",
          "max_raw": 54,
          "cohort_mean": 18.34,
          "cohort_sd": 9.8,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 3.1
            },
            {
              "raw": 1,
              "t_score": 32,
              "percentile": 3.8
            },
            {
              "raw": 2,
              "t_score": 33,
              "percentile": 4.8
            },
            {
              "raw": 3,
              "t_score": 34,
              "percentile": 5.9
            },
            {
              "raw": 4,
              "t_score": 35,
              "percentile": 7.2
            },
            {
              "raw": 5,
              "t_score": 36,
              "percentile": 8.7
            },
            {
              "raw": 6,
              "t_score": 37,
              "percentile": 10.4
            },
            {
              "raw": 7,
              "t_score": 38,
              "percentile": 12.4
            },
            {
              "raw": 8,
              "t_score": 39,
              "percentile": 14.6
            },
            {
              "raw": 9,
              "t_score": 40,
              "percentile": 17
            },
            {
              "raw": 10,
              "t_score": 41,
              "percentile": 19.8
            },
            {
              "raw": 11,
              "t_score": 43,
              "percentile": 22.7
            },
            {
              "raw": 12,
              "t_score": 44,
              "percentile": 25.9
            },
            {
              "raw": 13,
              "t_score": 45,
              "percentile": 29.3
            },
            {
              "raw": 14,
              "t_score": 46,
              "percentile": 32.9
            },
            {
              "raw": 15,
              "t_score": 47,
              "percentile": 36.7
            },
            {
              "raw": 16,
              "t_score": 48,
              "percentile": 40.6
            },
            {
              "raw": 17,
              "t_score": 49,
              "percentile": 44.6
            },
            {
              "raw": 18,
              "t_score": 50,
              "percentile": 48.6
            },
            {
              "raw": 19,
              "t_score": 51,
              "percentile": 52.7
            },
            {
              "raw": 20,
              "t_score": 52,
              "percentile": 56.7
            },
            {
              "raw": 21,
              "t_score": 53,
              "percentile": 60.7
            },
            {
              "raw": 22,
              "t_score": 54,
              "percentile": 64.6
            },
            {
              "raw": 23,
              "t_score": 55,
              "percentile": 68.3
            },
            {
              "raw": 24,
              "t_score": 56,
              "percentile": 71.8
            },
            {
              "raw": 25,
              "t_score": 57,
              "percentile": 75.2
            },
            {
              "raw": 26,
              "t_score": 58,
              "percentile": 78.3
            },
            {
              "raw": 27,
              "t_score": 59,
              "percentile": 81.2
            },
            {
              "raw": 28,
              "t_score": 60,
              "percentile": 83.8
            },
            {
              "raw": 29,
              "t_score": 61,
              "percentile": 86.2
            },
            {
              "raw": 30,
              "t_score": 62,
              "percentile": 88.3
            },
            {
              "raw": 31,
              "t_score": 63,
              "percentile": 90.2
            },
            {
              "raw": 32,
              "t_score": 64,
              "percentile": 91.8
            },
            {
              "raw": 33,
              "t_score": 65,
              "percentile": 93.3
            },
            {
              "raw": 34,
              "t_score": 66,
              "percentile": 94.5
            },
            {
              "raw": 35,
              "t_score": 67,
              "percentile": 95.5
            },
            {
              "raw": 36,
              "t_score": 68,
              "percentile": 96.4
            },
            {
              "raw": 37,
              "t_score": 69,
              "percentile": 97.2
            },
            {
              "raw": 38,
              "t_score": 70,
              "percentile": 97.8
            },
            {
              "raw": 39,
              "t_score": 71,
              "percentile": 98.3
            },
            {
              "raw": 40,
              "t_score": 72,
              "percentile": 98.6
            },
            {
              "raw": 41,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 42,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 43,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 44,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 45,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 46,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 47,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 48,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 49,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 50,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 51,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 52,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 53,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 54,
              "t_score": 86,
              "percentile": 99.9
            }
          ]
        },
        "H": {
          "scale_name": "ADHD Index",
          "max_raw": 36,
          "cohort_mean": 12.16,
          "cohort_sd": 6.4,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 2.9
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.1
            },
            {
              "raw": 2,
              "t_score": 34,
              "percentile": 5.6
            },
            {
              "raw": 3,
              "t_score": 36,
              "percentile": 7.6
            },
            {
              "raw": 4,
              "t_score": 37,
              "percentile": 10.1
            },
            {
              "raw": 5,
              "t_score": 39,
              "percentile": 13.2
            },
            {
              "raw": 6,
              "t_score": 40,
              "percentile": 16.8
            },
            {
              "raw": 7,
              "t_score": 42,
              "percentile": 21
            },
            {
              "raw": 8,
              "t_score": 44,
              "percentile": 25.8
            },
            {
              "raw": 9,
              "t_score": 45,
              "percentile": 31.1
            },
            {
              "raw": 10,
              "t_score": 47,
              "percentile": 36.8
            },
            {
              "raw": 11,
              "t_score": 48,
              "percentile": 42.8
            },
            {
              "raw": 12,
              "t_score": 50,
              "percentile": 49
            },
            {
              "raw": 13,
              "t_score": 51,
              "percentile": 55.2
            },
            {
              "raw": 14,
              "t_score": 53,
              "percentile": 61.3
            },
            {
              "raw": 15,
              "t_score": 54,
              "percentile": 67.1
            },
            {
              "raw": 16,
              "t_score": 56,
              "percentile": 72.6
            },
            {
              "raw": 17,
              "t_score": 58,
              "percentile": 77.5
            },
            {
              "raw": 18,
              "t_score": 59,
              "percentile": 81.9
            },
            {
              "raw": 19,
              "t_score": 61,
              "percentile": 85.7
            },
            {
              "raw": 20,
              "t_score": 62,
              "percentile": 89
            },
            {
              "raw": 21,
              "t_score": 64,
              "percentile": 91.6
            },
            {
              "raw": 22,
              "t_score": 65,
              "percentile": 93.8
            },
            {
              "raw": 23,
              "t_score": 67,
              "percentile": 95.5
            },
            {
              "raw": 24,
              "t_score": 68,
              "percentile": 96.8
            },
            {
              "raw": 25,
              "t_score": 70,
              "percentile": 97.8
            },
            {
              "raw": 26,
              "t_score": 72,
              "percentile": 98.5
            },
            {
              "raw": 27,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 28,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 29,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 30,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 31,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 32,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 87,
              "percentile": 99.9
            }
          ]
        }
      },
      "50+": {
        "A": {
          "scale_name": "Inattention / Memory Problems",
          "max_raw": 36,
          "cohort_mean": 11.54,
          "cohort_sd": 6.46,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.7
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 5.1
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 7
            },
            {
              "raw": 3,
              "t_score": 37,
              "percentile": 9.3
            },
            {
              "raw": 4,
              "t_score": 38,
              "percentile": 12.1
            },
            {
              "raw": 5,
              "t_score": 40,
              "percentile": 15.6
            },
            {
              "raw": 6,
              "t_score": 41,
              "percentile": 19.5
            },
            {
              "raw": 7,
              "t_score": 43,
              "percentile": 24.1
            },
            {
              "raw": 8,
              "t_score": 45,
              "percentile": 29.2
            },
            {
              "raw": 9,
              "t_score": 46,
              "percentile": 34.7
            },
            {
              "raw": 10,
              "t_score": 48,
              "percentile": 40.6
            },
            {
              "raw": 11,
              "t_score": 49,
              "percentile": 46.7
            },
            {
              "raw": 12,
              "t_score": 51,
              "percentile": 52.8
            },
            {
              "raw": 13,
              "t_score": 52,
              "percentile": 58.9
            },
            {
              "raw": 14,
              "t_score": 54,
              "percentile": 64.8
            },
            {
              "raw": 15,
              "t_score": 55,
              "percentile": 70.4
            },
            {
              "raw": 16,
              "t_score": 57,
              "percentile": 75.5
            },
            {
              "raw": 17,
              "t_score": 58,
              "percentile": 80.1
            },
            {
              "raw": 18,
              "t_score": 60,
              "percentile": 84.1
            },
            {
              "raw": 19,
              "t_score": 62,
              "percentile": 87.6
            },
            {
              "raw": 20,
              "t_score": 63,
              "percentile": 90.5
            },
            {
              "raw": 21,
              "t_score": 65,
              "percentile": 92.8
            },
            {
              "raw": 22,
              "t_score": 66,
              "percentile": 94.7
            },
            {
              "raw": 23,
              "t_score": 68,
              "percentile": 96.2
            },
            {
              "raw": 24,
              "t_score": 69,
              "percentile": 97.3
            },
            {
              "raw": 25,
              "t_score": 71,
              "percentile": 98.1
            },
            {
              "raw": 26,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 27,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 28,
              "t_score": 75,
              "percentile": 99.5
            },
            {
              "raw": 29,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 30,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 31,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 88,
              "percentile": 99.9
            }
          ]
        },
        "B": {
          "scale_name": "Hyperactivity / Restlessness",
          "max_raw": 36,
          "cohort_mean": 9.58,
          "cohort_sd": 5.89,
          "lookup": [
            {
              "raw": 0,
              "t_score": 34,
              "percentile": 5.2
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 7.3
            },
            {
              "raw": 2,
              "t_score": 37,
              "percentile": 9.9
            },
            {
              "raw": 3,
              "t_score": 39,
              "percentile": 13.2
            },
            {
              "raw": 4,
              "t_score": 41,
              "percentile": 17.2
            },
            {
              "raw": 5,
              "t_score": 42,
              "percentile": 21.9
            },
            {
              "raw": 6,
              "t_score": 44,
              "percentile": 27.2
            },
            {
              "raw": 7,
              "t_score": 46,
              "percentile": 33.1
            },
            {
              "raw": 8,
              "t_score": 47,
              "percentile": 39.5
            },
            {
              "raw": 9,
              "t_score": 49,
              "percentile": 46.1
            },
            {
              "raw": 10,
              "t_score": 51,
              "percentile": 52.9
            },
            {
              "raw": 11,
              "t_score": 52,
              "percentile": 59.6
            },
            {
              "raw": 12,
              "t_score": 54,
              "percentile": 66
            },
            {
              "raw": 13,
              "t_score": 56,
              "percentile": 71.9
            },
            {
              "raw": 14,
              "t_score": 58,
              "percentile": 77.4
            },
            {
              "raw": 15,
              "t_score": 59,
              "percentile": 82.1
            },
            {
              "raw": 16,
              "t_score": 61,
              "percentile": 86.2
            },
            {
              "raw": 17,
              "t_score": 63,
              "percentile": 89.6
            },
            {
              "raw": 18,
              "t_score": 64,
              "percentile": 92.4
            },
            {
              "raw": 19,
              "t_score": 66,
              "percentile": 94.5
            },
            {
              "raw": 20,
              "t_score": 68,
              "percentile": 96.2
            },
            {
              "raw": 21,
              "t_score": 69,
              "percentile": 97.4
            },
            {
              "raw": 22,
              "t_score": 71,
              "percentile": 98.3
            },
            {
              "raw": 23,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 24,
              "t_score": 74,
              "percentile": 99.3
            },
            {
              "raw": 25,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 26,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 27,
              "t_score": 80,
              "percentile": 99.8
            },
            {
              "raw": 28,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 29,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "C": {
          "scale_name": "Impulsivity / Emotional Lability",
          "max_raw": 36,
          "cohort_mean": 10.35,
          "cohort_sd": 6.17,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.7
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 6.5
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 8.8
            },
            {
              "raw": 3,
              "t_score": 38,
              "percentile": 11.7
            },
            {
              "raw": 4,
              "t_score": 40,
              "percentile": 15.2
            },
            {
              "raw": 5,
              "t_score": 41,
              "percentile": 19.3
            },
            {
              "raw": 6,
              "t_score": 43,
              "percentile": 24.1
            },
            {
              "raw": 7,
              "t_score": 45,
              "percentile": 29.4
            },
            {
              "raw": 8,
              "t_score": 46,
              "percentile": 35.2
            },
            {
              "raw": 9,
              "t_score": 48,
              "percentile": 41.4
            },
            {
              "raw": 10,
              "t_score": 49,
              "percentile": 47.8
            },
            {
              "raw": 11,
              "t_score": 51,
              "percentile": 54.2
            },
            {
              "raw": 12,
              "t_score": 53,
              "percentile": 60.6
            },
            {
              "raw": 13,
              "t_score": 54,
              "percentile": 66.6
            },
            {
              "raw": 14,
              "t_score": 56,
              "percentile": 72.3
            },
            {
              "raw": 15,
              "t_score": 58,
              "percentile": 77.5
            },
            {
              "raw": 16,
              "t_score": 59,
              "percentile": 82
            },
            {
              "raw": 17,
              "t_score": 61,
              "percentile": 85.9
            },
            {
              "raw": 18,
              "t_score": 62,
              "percentile": 89.2
            },
            {
              "raw": 19,
              "t_score": 64,
              "percentile": 91.9
            },
            {
              "raw": 20,
              "t_score": 66,
              "percentile": 94.1
            },
            {
              "raw": 21,
              "t_score": 67,
              "percentile": 95.8
            },
            {
              "raw": 22,
              "t_score": 69,
              "percentile": 97
            },
            {
              "raw": 23,
              "t_score": 70,
              "percentile": 98
            },
            {
              "raw": 24,
              "t_score": 72,
              "percentile": 98.6
            },
            {
              "raw": 25,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 26,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 27,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 28,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 29,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "D": {
          "scale_name": "Problems with Self-Concept",
          "max_raw": 36,
          "cohort_mean": 8.38,
          "cohort_sd": 5.61,
          "lookup": [
            {
              "raw": 0,
              "t_score": 35,
              "percentile": 6.7
            },
            {
              "raw": 1,
              "t_score": 37,
              "percentile": 9.4
            },
            {
              "raw": 2,
              "t_score": 39,
              "percentile": 12.8
            },
            {
              "raw": 3,
              "t_score": 40,
              "percentile": 16.9
            },
            {
              "raw": 4,
              "t_score": 42,
              "percentile": 21.7
            },
            {
              "raw": 5,
              "t_score": 44,
              "percentile": 27.3
            },
            {
              "raw": 6,
              "t_score": 46,
              "percentile": 33.6
            },
            {
              "raw": 7,
              "t_score": 48,
              "percentile": 40.3
            },
            {
              "raw": 8,
              "t_score": 49,
              "percentile": 47.3
            },
            {
              "raw": 9,
              "t_score": 51,
              "percentile": 54.4
            },
            {
              "raw": 10,
              "t_score": 53,
              "percentile": 61.4
            },
            {
              "raw": 11,
              "t_score": 55,
              "percentile": 68
            },
            {
              "raw": 12,
              "t_score": 56,
              "percentile": 74.1
            },
            {
              "raw": 13,
              "t_score": 58,
              "percentile": 79.5
            },
            {
              "raw": 14,
              "t_score": 60,
              "percentile": 84.2
            },
            {
              "raw": 15,
              "t_score": 62,
              "percentile": 88.1
            },
            {
              "raw": 16,
              "t_score": 64,
              "percentile": 91.3
            },
            {
              "raw": 17,
              "t_score": 65,
              "percentile": 93.8
            },
            {
              "raw": 18,
              "t_score": 67,
              "percentile": 95.7
            },
            {
              "raw": 19,
              "t_score": 69,
              "percentile": 97.1
            },
            {
              "raw": 20,
              "t_score": 71,
              "percentile": 98.1
            },
            {
              "raw": 21,
              "t_score": 73,
              "percentile": 98.8
            },
            {
              "raw": 22,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 23,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 24,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 25,
              "t_score": 80,
              "percentile": 99.8
            },
            {
              "raw": 26,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 28,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 29,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "E": {
          "scale_name": "DSM Inattentive Symptoms",
          "max_raw": 27,
          "cohort_mean": 8.89,
          "cohort_sd": 5.22,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.4
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 6.5
            },
            {
              "raw": 2,
              "t_score": 37,
              "percentile": 9.4
            },
            {
              "raw": 3,
              "t_score": 39,
              "percentile": 13
            },
            {
              "raw": 4,
              "t_score": 41,
              "percentile": 17.5
            },
            {
              "raw": 5,
              "t_score": 43,
              "percentile": 22.8
            },
            {
              "raw": 6,
              "t_score": 44,
              "percentile": 29
            },
            {
              "raw": 7,
              "t_score": 46,
              "percentile": 35.9
            },
            {
              "raw": 8,
              "t_score": 48,
              "percentile": 43.2
            },
            {
              "raw": 9,
              "t_score": 50,
              "percentile": 50.8
            },
            {
              "raw": 10,
              "t_score": 52,
              "percentile": 58.4
            },
            {
              "raw": 11,
              "t_score": 54,
              "percentile": 65.7
            },
            {
              "raw": 12,
              "t_score": 56,
              "percentile": 72.4
            },
            {
              "raw": 13,
              "t_score": 58,
              "percentile": 78.4
            },
            {
              "raw": 14,
              "t_score": 60,
              "percentile": 83.6
            },
            {
              "raw": 15,
              "t_score": 62,
              "percentile": 87.9
            },
            {
              "raw": 16,
              "t_score": 64,
              "percentile": 91.3
            },
            {
              "raw": 17,
              "t_score": 66,
              "percentile": 94
            },
            {
              "raw": 18,
              "t_score": 67,
              "percentile": 95.9
            },
            {
              "raw": 19,
              "t_score": 69,
              "percentile": 97.3
            },
            {
              "raw": 20,
              "t_score": 71,
              "percentile": 98.3
            },
            {
              "raw": 21,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 22,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 23,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 24,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 25,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 26,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 85,
              "percentile": 99.9
            }
          ]
        },
        "F": {
          "scale_name": "DSM Hyperactive-Impulsive Symptoms",
          "max_raw": 27,
          "cohort_mean": 7.61,
          "cohort_sd": 4.84,
          "lookup": [
            {
              "raw": 0,
              "t_score": 34,
              "percentile": 5.8
            },
            {
              "raw": 1,
              "t_score": 36,
              "percentile": 8.6
            },
            {
              "raw": 2,
              "t_score": 38,
              "percentile": 12.3
            },
            {
              "raw": 3,
              "t_score": 40,
              "percentile": 17.1
            },
            {
              "raw": 4,
              "t_score": 43,
              "percentile": 22.8
            },
            {
              "raw": 5,
              "t_score": 45,
              "percentile": 29.5
            },
            {
              "raw": 6,
              "t_score": 47,
              "percentile": 37
            },
            {
              "raw": 7,
              "t_score": 49,
              "percentile": 45
            },
            {
              "raw": 8,
              "t_score": 51,
              "percentile": 53.2
            },
            {
              "raw": 9,
              "t_score": 53,
              "percentile": 61.3
            },
            {
              "raw": 10,
              "t_score": 55,
              "percentile": 68.9
            },
            {
              "raw": 11,
              "t_score": 57,
              "percentile": 75.8
            },
            {
              "raw": 12,
              "t_score": 59,
              "percentile": 81.8
            },
            {
              "raw": 13,
              "t_score": 61,
              "percentile": 86.7
            },
            {
              "raw": 14,
              "t_score": 63,
              "percentile": 90.6
            },
            {
              "raw": 15,
              "t_score": 65,
              "percentile": 93.6
            },
            {
              "raw": 16,
              "t_score": 67,
              "percentile": 95.8
            },
            {
              "raw": 17,
              "t_score": 69,
              "percentile": 97.4
            },
            {
              "raw": 18,
              "t_score": 71,
              "percentile": 98.4
            },
            {
              "raw": 19,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 20,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 21,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 22,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 23,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 24,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 25,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 26,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "G": {
          "scale_name": "Total ADHD Symptoms",
          "max_raw": 54,
          "cohort_mean": 16.5,
          "cohort_sd": 9.31,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.8
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.8
            },
            {
              "raw": 2,
              "t_score": 34,
              "percentile": 6
            },
            {
              "raw": 3,
              "t_score": 35,
              "percentile": 7.3
            },
            {
              "raw": 4,
              "t_score": 37,
              "percentile": 9
            },
            {
              "raw": 5,
              "t_score": 38,
              "percentile": 10.8
            },
            {
              "raw": 6,
              "t_score": 39,
              "percentile": 13
            },
            {
              "raw": 7,
              "t_score": 40,
              "percentile": 15.4
            },
            {
              "raw": 8,
              "t_score": 41,
              "percentile": 18.1
            },
            {
              "raw": 9,
              "t_score": 42,
              "percentile": 21
            },
            {
              "raw": 10,
              "t_score": 43,
              "percentile": 24.2
            },
            {
              "raw": 11,
              "t_score": 44,
              "percentile": 27.7
            },
            {
              "raw": 12,
              "t_score": 45,
              "percentile": 31.4
            },
            {
              "raw": 13,
              "t_score": 46,
              "percentile": 35.3
            },
            {
              "raw": 14,
              "t_score": 47,
              "percentile": 39.4
            },
            {
              "raw": 15,
              "t_score": 48,
              "percentile": 43.6
            },
            {
              "raw": 16,
              "t_score": 49,
              "percentile": 47.9
            },
            {
              "raw": 17,
              "t_score": 51,
              "percentile": 52.1
            },
            {
              "raw": 18,
              "t_score": 52,
              "percentile": 56.4
            },
            {
              "raw": 19,
              "t_score": 53,
              "percentile": 60.6
            },
            {
              "raw": 20,
              "t_score": 54,
              "percentile": 64.6
            },
            {
              "raw": 21,
              "t_score": 55,
              "percentile": 68.6
            },
            {
              "raw": 22,
              "t_score": 56,
              "percentile": 72.3
            },
            {
              "raw": 23,
              "t_score": 57,
              "percentile": 75.7
            },
            {
              "raw": 24,
              "t_score": 58,
              "percentile": 79
            },
            {
              "raw": 25,
              "t_score": 59,
              "percentile": 81.9
            },
            {
              "raw": 26,
              "t_score": 60,
              "percentile": 84.6
            },
            {
              "raw": 27,
              "t_score": 61,
              "percentile": 87
            },
            {
              "raw": 28,
              "t_score": 62,
              "percentile": 89.2
            },
            {
              "raw": 29,
              "t_score": 63,
              "percentile": 91
            },
            {
              "raw": 30,
              "t_score": 64,
              "percentile": 92.6
            },
            {
              "raw": 31,
              "t_score": 66,
              "percentile": 94
            },
            {
              "raw": 32,
              "t_score": 67,
              "percentile": 95.2
            },
            {
              "raw": 33,
              "t_score": 68,
              "percentile": 96.2
            },
            {
              "raw": 34,
              "t_score": 69,
              "percentile": 97
            },
            {
              "raw": 35,
              "t_score": 70,
              "percentile": 97.7
            },
            {
              "raw": 36,
              "t_score": 71,
              "percentile": 98.2
            },
            {
              "raw": 37,
              "t_score": 72,
              "percentile": 98.6
            },
            {
              "raw": 38,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 39,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 40,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 41,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 42,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 43,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 44,
              "t_score": 80,
              "percentile": 99.8
            },
            {
              "raw": 45,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 46,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 47,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 48,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 49,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 50,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 51,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 52,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 53,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 54,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "H": {
          "scale_name": "ADHD Index",
          "max_raw": 36,
          "cohort_mean": 10.94,
          "cohort_sd": 6.08,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.6
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 5.1
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 7.1
            },
            {
              "raw": 3,
              "t_score": 37,
              "percentile": 9.6
            },
            {
              "raw": 4,
              "t_score": 39,
              "percentile": 12.7
            },
            {
              "raw": 5,
              "t_score": 40,
              "percentile": 16.4
            },
            {
              "raw": 6,
              "t_score": 42,
              "percentile": 20.8
            },
            {
              "raw": 7,
              "t_score": 44,
              "percentile": 25.8
            },
            {
              "raw": 8,
              "t_score": 45,
              "percentile": 31.4
            },
            {
              "raw": 9,
              "t_score": 47,
              "percentile": 37.5
            },
            {
              "raw": 10,
              "t_score": 48,
              "percentile": 43.8
            },
            {
              "raw": 11,
              "t_score": 50,
              "percentile": 50.4
            },
            {
              "raw": 12,
              "t_score": 52,
              "percentile": 56.9
            },
            {
              "raw": 13,
              "t_score": 53,
              "percentile": 63.2
            },
            {
              "raw": 14,
              "t_score": 55,
              "percentile": 69.2
            },
            {
              "raw": 15,
              "t_score": 57,
              "percentile": 74.8
            },
            {
              "raw": 16,
              "t_score": 58,
              "percentile": 79.7
            },
            {
              "raw": 17,
              "t_score": 60,
              "percentile": 84
            },
            {
              "raw": 18,
              "t_score": 62,
              "percentile": 87.7
            },
            {
              "raw": 19,
              "t_score": 63,
              "percentile": 90.7
            },
            {
              "raw": 20,
              "t_score": 65,
              "percentile": 93.2
            },
            {
              "raw": 21,
              "t_score": 67,
              "percentile": 95.1
            },
            {
              "raw": 22,
              "t_score": 68,
              "percentile": 96.6
            },
            {
              "raw": 23,
              "t_score": 70,
              "percentile": 97.6
            },
            {
              "raw": 24,
              "t_score": 71,
              "percentile": 98.4
            },
            {
              "raw": 25,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 26,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 27,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 28,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 29,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        }
      }
    },
    "Female": {
      "18-29": {
        "A": {
          "scale_name": "Inattention / Memory Problems",
          "max_raw": 36,
          "cohort_mean": 12.82,
          "cohort_sd": 6.8,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 3
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.1
            },
            {
              "raw": 2,
              "t_score": 34,
              "percentile": 5.6
            },
            {
              "raw": 3,
              "t_score": 36,
              "percentile": 7.4
            },
            {
              "raw": 4,
              "t_score": 37,
              "percentile": 9.7
            },
            {
              "raw": 5,
              "t_score": 38,
              "percentile": 12.5
            },
            {
              "raw": 6,
              "t_score": 40,
              "percentile": 15.8
            },
            {
              "raw": 7,
              "t_score": 41,
              "percentile": 19.6
            },
            {
              "raw": 8,
              "t_score": 43,
              "percentile": 23.9
            },
            {
              "raw": 9,
              "t_score": 44,
              "percentile": 28.7
            },
            {
              "raw": 10,
              "t_score": 46,
              "percentile": 33.9
            },
            {
              "raw": 11,
              "t_score": 47,
              "percentile": 39.4
            },
            {
              "raw": 12,
              "t_score": 49,
              "percentile": 45.2
            },
            {
              "raw": 13,
              "t_score": 50,
              "percentile": 51
            },
            {
              "raw": 14,
              "t_score": 52,
              "percentile": 56.9
            },
            {
              "raw": 15,
              "t_score": 53,
              "percentile": 62.5
            },
            {
              "raw": 16,
              "t_score": 55,
              "percentile": 68
            },
            {
              "raw": 17,
              "t_score": 56,
              "percentile": 73
            },
            {
              "raw": 18,
              "t_score": 58,
              "percentile": 77.7
            },
            {
              "raw": 19,
              "t_score": 59,
              "percentile": 81.8
            },
            {
              "raw": 20,
              "t_score": 61,
              "percentile": 85.4
            },
            {
              "raw": 21,
              "t_score": 62,
              "percentile": 88.5
            },
            {
              "raw": 22,
              "t_score": 63,
              "percentile": 91.1
            },
            {
              "raw": 23,
              "t_score": 65,
              "percentile": 93.3
            },
            {
              "raw": 24,
              "t_score": 66,
              "percentile": 95
            },
            {
              "raw": 25,
              "t_score": 68,
              "percentile": 96.3
            },
            {
              "raw": 26,
              "t_score": 69,
              "percentile": 97.4
            },
            {
              "raw": 27,
              "t_score": 71,
              "percentile": 98.1
            },
            {
              "raw": 28,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 29,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 30,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 31,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 32,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 33,
              "t_score": 80,
              "percentile": 99.8
            },
            {
              "raw": 34,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 84,
              "percentile": 99.9
            }
          ]
        },
        "B": {
          "scale_name": "Hyperactivity / Restlessness",
          "max_raw": 36,
          "cohort_mean": 10.64,
          "cohort_sd": 6.2,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.3
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 6
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 8.2
            },
            {
              "raw": 3,
              "t_score": 38,
              "percentile": 10.9
            },
            {
              "raw": 4,
              "t_score": 39,
              "percentile": 14.2
            },
            {
              "raw": 5,
              "t_score": 41,
              "percentile": 18.1
            },
            {
              "raw": 6,
              "t_score": 43,
              "percentile": 22.7
            },
            {
              "raw": 7,
              "t_score": 44,
              "percentile": 27.9
            },
            {
              "raw": 8,
              "t_score": 46,
              "percentile": 33.5
            },
            {
              "raw": 9,
              "t_score": 47,
              "percentile": 39.6
            },
            {
              "raw": 10,
              "t_score": 49,
              "percentile": 45.9
            },
            {
              "raw": 11,
              "t_score": 51,
              "percentile": 52.3
            },
            {
              "raw": 12,
              "t_score": 52,
              "percentile": 58.7
            },
            {
              "raw": 13,
              "t_score": 54,
              "percentile": 64.8
            },
            {
              "raw": 14,
              "t_score": 55,
              "percentile": 70.6
            },
            {
              "raw": 15,
              "t_score": 57,
              "percentile": 75.9
            },
            {
              "raw": 16,
              "t_score": 59,
              "percentile": 80.6
            },
            {
              "raw": 17,
              "t_score": 60,
              "percentile": 84.8
            },
            {
              "raw": 18,
              "t_score": 62,
              "percentile": 88.2
            },
            {
              "raw": 19,
              "t_score": 63,
              "percentile": 91.1
            },
            {
              "raw": 20,
              "t_score": 65,
              "percentile": 93.4
            },
            {
              "raw": 21,
              "t_score": 67,
              "percentile": 95.3
            },
            {
              "raw": 22,
              "t_score": 68,
              "percentile": 96.7
            },
            {
              "raw": 23,
              "t_score": 70,
              "percentile": 97.7
            },
            {
              "raw": 24,
              "t_score": 72,
              "percentile": 98.4
            },
            {
              "raw": 25,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 26,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 27,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 28,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 29,
              "t_score": 80,
              "percentile": 99.8
            },
            {
              "raw": 30,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "C": {
          "scale_name": "Impulsivity / Emotional Lability",
          "max_raw": 36,
          "cohort_mean": 11.49,
          "cohort_sd": 6.5,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.8
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 5.3
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 7.2
            },
            {
              "raw": 3,
              "t_score": 37,
              "percentile": 9.6
            },
            {
              "raw": 4,
              "t_score": 38,
              "percentile": 12.4
            },
            {
              "raw": 5,
              "t_score": 40,
              "percentile": 15.9
            },
            {
              "raw": 6,
              "t_score": 42,
              "percentile": 19.9
            },
            {
              "raw": 7,
              "t_score": 43,
              "percentile": 24.5
            },
            {
              "raw": 8,
              "t_score": 45,
              "percentile": 29.5
            },
            {
              "raw": 9,
              "t_score": 46,
              "percentile": 35.1
            },
            {
              "raw": 10,
              "t_score": 48,
              "percentile": 40.9
            },
            {
              "raw": 11,
              "t_score": 49,
              "percentile": 47
            },
            {
              "raw": 12,
              "t_score": 51,
              "percentile": 53.1
            },
            {
              "raw": 13,
              "t_score": 52,
              "percentile": 59.2
            },
            {
              "raw": 14,
              "t_score": 54,
              "percentile": 65
            },
            {
              "raw": 15,
              "t_score": 55,
              "percentile": 70.5
            },
            {
              "raw": 16,
              "t_score": 57,
              "percentile": 75.6
            },
            {
              "raw": 17,
              "t_score": 58,
              "percentile": 80.1
            },
            {
              "raw": 18,
              "t_score": 60,
              "percentile": 84.2
            },
            {
              "raw": 19,
              "t_score": 62,
              "percentile": 87.6
            },
            {
              "raw": 20,
              "t_score": 63,
              "percentile": 90.5
            },
            {
              "raw": 21,
              "t_score": 65,
              "percentile": 92.8
            },
            {
              "raw": 22,
              "t_score": 66,
              "percentile": 94.7
            },
            {
              "raw": 23,
              "t_score": 68,
              "percentile": 96.2
            },
            {
              "raw": 24,
              "t_score": 69,
              "percentile": 97.3
            },
            {
              "raw": 25,
              "t_score": 71,
              "percentile": 98.1
            },
            {
              "raw": 26,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 27,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 28,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 29,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 30,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 31,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 88,
              "percentile": 99.9
            }
          ]
        },
        "D": {
          "scale_name": "Problems with Self-Concept",
          "max_raw": 36,
          "cohort_mean": 9.31,
          "cohort_sd": 5.9,
          "lookup": [
            {
              "raw": 0,
              "t_score": 34,
              "percentile": 5.7
            },
            {
              "raw": 1,
              "t_score": 36,
              "percentile": 7.9
            },
            {
              "raw": 2,
              "t_score": 38,
              "percentile": 10.8
            },
            {
              "raw": 3,
              "t_score": 39,
              "percentile": 14.2
            },
            {
              "raw": 4,
              "t_score": 41,
              "percentile": 18.4
            },
            {
              "raw": 5,
              "t_score": 43,
              "percentile": 23.3
            },
            {
              "raw": 6,
              "t_score": 44,
              "percentile": 28.7
            },
            {
              "raw": 7,
              "t_score": 46,
              "percentile": 34.8
            },
            {
              "raw": 8,
              "t_score": 48,
              "percentile": 41.2
            },
            {
              "raw": 9,
              "t_score": 49,
              "percentile": 47.9
            },
            {
              "raw": 10,
              "t_score": 51,
              "percentile": 54.7
            },
            {
              "raw": 11,
              "t_score": 53,
              "percentile": 61.3
            },
            {
              "raw": 12,
              "t_score": 55,
              "percentile": 67.6
            },
            {
              "raw": 13,
              "t_score": 56,
              "percentile": 73.4
            },
            {
              "raw": 14,
              "t_score": 58,
              "percentile": 78.7
            },
            {
              "raw": 15,
              "t_score": 60,
              "percentile": 83.3
            },
            {
              "raw": 16,
              "t_score": 61,
              "percentile": 87.2
            },
            {
              "raw": 17,
              "t_score": 63,
              "percentile": 90.4
            },
            {
              "raw": 18,
              "t_score": 65,
              "percentile": 93
            },
            {
              "raw": 19,
              "t_score": 66,
              "percentile": 95
            },
            {
              "raw": 20,
              "t_score": 68,
              "percentile": 96.5
            },
            {
              "raw": 21,
              "t_score": 70,
              "percentile": 97.6
            },
            {
              "raw": 22,
              "t_score": 72,
              "percentile": 98.4
            },
            {
              "raw": 23,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 24,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 25,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 26,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 27,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 28,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 29,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "E": {
          "scale_name": "DSM Inattentive Symptoms",
          "max_raw": 27,
          "cohort_mean": 9.88,
          "cohort_sd": 5.5,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.6
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 5.3
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 7.6
            },
            {
              "raw": 3,
              "t_score": 37,
              "percentile": 10.5
            },
            {
              "raw": 4,
              "t_score": 39,
              "percentile": 14.3
            },
            {
              "raw": 5,
              "t_score": 41,
              "percentile": 18.7
            },
            {
              "raw": 6,
              "t_score": 43,
              "percentile": 24
            },
            {
              "raw": 7,
              "t_score": 45,
              "percentile": 30
            },
            {
              "raw": 8,
              "t_score": 47,
              "percentile": 36.6
            },
            {
              "raw": 9,
              "t_score": 48,
              "percentile": 43.6
            },
            {
              "raw": 10,
              "t_score": 50,
              "percentile": 50.9
            },
            {
              "raw": 11,
              "t_score": 52,
              "percentile": 58.1
            },
            {
              "raw": 12,
              "t_score": 54,
              "percentile": 65
            },
            {
              "raw": 13,
              "t_score": 56,
              "percentile": 71.5
            },
            {
              "raw": 14,
              "t_score": 57,
              "percentile": 77.3
            },
            {
              "raw": 15,
              "t_score": 59,
              "percentile": 82.4
            },
            {
              "raw": 16,
              "t_score": 61,
              "percentile": 86.7
            },
            {
              "raw": 17,
              "t_score": 63,
              "percentile": 90.2
            },
            {
              "raw": 18,
              "t_score": 65,
              "percentile": 93
            },
            {
              "raw": 19,
              "t_score": 67,
              "percentile": 95.1
            },
            {
              "raw": 20,
              "t_score": 68,
              "percentile": 96.7
            },
            {
              "raw": 21,
              "t_score": 70,
              "percentile": 97.8
            },
            {
              "raw": 22,
              "t_score": 72,
              "percentile": 98.6
            },
            {
              "raw": 23,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 24,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 25,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 26,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 27,
              "t_score": 81,
              "percentile": 99.9
            }
          ]
        },
        "F": {
          "scale_name": "DSM Hyperactive-Impulsive Symptoms",
          "max_raw": 27,
          "cohort_mean": 8.46,
          "cohort_sd": 5.1,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.9
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 7.2
            },
            {
              "raw": 2,
              "t_score": 37,
              "percentile": 10.3
            },
            {
              "raw": 3,
              "t_score": 39,
              "percentile": 14.2
            },
            {
              "raw": 4,
              "t_score": 41,
              "percentile": 19.1
            },
            {
              "raw": 5,
              "t_score": 43,
              "percentile": 24.9
            },
            {
              "raw": 6,
              "t_score": 45,
              "percentile": 31.5
            },
            {
              "raw": 7,
              "t_score": 47,
              "percentile": 38.8
            },
            {
              "raw": 8,
              "t_score": 49,
              "percentile": 46.4
            },
            {
              "raw": 9,
              "t_score": 51,
              "percentile": 54.3
            },
            {
              "raw": 10,
              "t_score": 53,
              "percentile": 61.9
            },
            {
              "raw": 11,
              "t_score": 55,
              "percentile": 69.1
            },
            {
              "raw": 12,
              "t_score": 57,
              "percentile": 75.7
            },
            {
              "raw": 13,
              "t_score": 59,
              "percentile": 81.4
            },
            {
              "raw": 14,
              "t_score": 61,
              "percentile": 86.2
            },
            {
              "raw": 15,
              "t_score": 63,
              "percentile": 90
            },
            {
              "raw": 16,
              "t_score": 65,
              "percentile": 93
            },
            {
              "raw": 17,
              "t_score": 67,
              "percentile": 95.3
            },
            {
              "raw": 18,
              "t_score": 69,
              "percentile": 96.9
            },
            {
              "raw": 19,
              "t_score": 71,
              "percentile": 98.1
            },
            {
              "raw": 20,
              "t_score": 73,
              "percentile": 98.8
            },
            {
              "raw": 21,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 22,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 23,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 24,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 25,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 26,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 86,
              "percentile": 99.9
            }
          ]
        },
        "G": {
          "scale_name": "Total ADHD Symptoms",
          "max_raw": 54,
          "cohort_mean": 18.34,
          "cohort_sd": 9.8,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 3.1
            },
            {
              "raw": 1,
              "t_score": 32,
              "percentile": 3.8
            },
            {
              "raw": 2,
              "t_score": 33,
              "percentile": 4.8
            },
            {
              "raw": 3,
              "t_score": 34,
              "percentile": 5.9
            },
            {
              "raw": 4,
              "t_score": 35,
              "percentile": 7.2
            },
            {
              "raw": 5,
              "t_score": 36,
              "percentile": 8.7
            },
            {
              "raw": 6,
              "t_score": 37,
              "percentile": 10.4
            },
            {
              "raw": 7,
              "t_score": 38,
              "percentile": 12.4
            },
            {
              "raw": 8,
              "t_score": 39,
              "percentile": 14.6
            },
            {
              "raw": 9,
              "t_score": 40,
              "percentile": 17
            },
            {
              "raw": 10,
              "t_score": 41,
              "percentile": 19.8
            },
            {
              "raw": 11,
              "t_score": 43,
              "percentile": 22.7
            },
            {
              "raw": 12,
              "t_score": 44,
              "percentile": 25.9
            },
            {
              "raw": 13,
              "t_score": 45,
              "percentile": 29.3
            },
            {
              "raw": 14,
              "t_score": 46,
              "percentile": 32.9
            },
            {
              "raw": 15,
              "t_score": 47,
              "percentile": 36.7
            },
            {
              "raw": 16,
              "t_score": 48,
              "percentile": 40.6
            },
            {
              "raw": 17,
              "t_score": 49,
              "percentile": 44.6
            },
            {
              "raw": 18,
              "t_score": 50,
              "percentile": 48.6
            },
            {
              "raw": 19,
              "t_score": 51,
              "percentile": 52.7
            },
            {
              "raw": 20,
              "t_score": 52,
              "percentile": 56.7
            },
            {
              "raw": 21,
              "t_score": 53,
              "percentile": 60.7
            },
            {
              "raw": 22,
              "t_score": 54,
              "percentile": 64.6
            },
            {
              "raw": 23,
              "t_score": 55,
              "percentile": 68.3
            },
            {
              "raw": 24,
              "t_score": 56,
              "percentile": 71.8
            },
            {
              "raw": 25,
              "t_score": 57,
              "percentile": 75.2
            },
            {
              "raw": 26,
              "t_score": 58,
              "percentile": 78.3
            },
            {
              "raw": 27,
              "t_score": 59,
              "percentile": 81.2
            },
            {
              "raw": 28,
              "t_score": 60,
              "percentile": 83.8
            },
            {
              "raw": 29,
              "t_score": 61,
              "percentile": 86.2
            },
            {
              "raw": 30,
              "t_score": 62,
              "percentile": 88.3
            },
            {
              "raw": 31,
              "t_score": 63,
              "percentile": 90.2
            },
            {
              "raw": 32,
              "t_score": 64,
              "percentile": 91.8
            },
            {
              "raw": 33,
              "t_score": 65,
              "percentile": 93.3
            },
            {
              "raw": 34,
              "t_score": 66,
              "percentile": 94.5
            },
            {
              "raw": 35,
              "t_score": 67,
              "percentile": 95.5
            },
            {
              "raw": 36,
              "t_score": 68,
              "percentile": 96.4
            },
            {
              "raw": 37,
              "t_score": 69,
              "percentile": 97.2
            },
            {
              "raw": 38,
              "t_score": 70,
              "percentile": 97.8
            },
            {
              "raw": 39,
              "t_score": 71,
              "percentile": 98.3
            },
            {
              "raw": 40,
              "t_score": 72,
              "percentile": 98.6
            },
            {
              "raw": 41,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 42,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 43,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 44,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 45,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 46,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 47,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 48,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 49,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 50,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 51,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 52,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 53,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 54,
              "t_score": 86,
              "percentile": 99.9
            }
          ]
        },
        "H": {
          "scale_name": "ADHD Index",
          "max_raw": 36,
          "cohort_mean": 12.16,
          "cohort_sd": 6.4,
          "lookup": [
            {
              "raw": 0,
              "t_score": 31,
              "percentile": 2.9
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.1
            },
            {
              "raw": 2,
              "t_score": 34,
              "percentile": 5.6
            },
            {
              "raw": 3,
              "t_score": 36,
              "percentile": 7.6
            },
            {
              "raw": 4,
              "t_score": 37,
              "percentile": 10.1
            },
            {
              "raw": 5,
              "t_score": 39,
              "percentile": 13.2
            },
            {
              "raw": 6,
              "t_score": 40,
              "percentile": 16.8
            },
            {
              "raw": 7,
              "t_score": 42,
              "percentile": 21
            },
            {
              "raw": 8,
              "t_score": 44,
              "percentile": 25.8
            },
            {
              "raw": 9,
              "t_score": 45,
              "percentile": 31.1
            },
            {
              "raw": 10,
              "t_score": 47,
              "percentile": 36.8
            },
            {
              "raw": 11,
              "t_score": 48,
              "percentile": 42.8
            },
            {
              "raw": 12,
              "t_score": 50,
              "percentile": 49
            },
            {
              "raw": 13,
              "t_score": 51,
              "percentile": 55.2
            },
            {
              "raw": 14,
              "t_score": 53,
              "percentile": 61.3
            },
            {
              "raw": 15,
              "t_score": 54,
              "percentile": 67.1
            },
            {
              "raw": 16,
              "t_score": 56,
              "percentile": 72.6
            },
            {
              "raw": 17,
              "t_score": 58,
              "percentile": 77.5
            },
            {
              "raw": 18,
              "t_score": 59,
              "percentile": 81.9
            },
            {
              "raw": 19,
              "t_score": 61,
              "percentile": 85.7
            },
            {
              "raw": 20,
              "t_score": 62,
              "percentile": 89
            },
            {
              "raw": 21,
              "t_score": 64,
              "percentile": 91.6
            },
            {
              "raw": 22,
              "t_score": 65,
              "percentile": 93.8
            },
            {
              "raw": 23,
              "t_score": 67,
              "percentile": 95.5
            },
            {
              "raw": 24,
              "t_score": 68,
              "percentile": 96.8
            },
            {
              "raw": 25,
              "t_score": 70,
              "percentile": 97.8
            },
            {
              "raw": 26,
              "t_score": 72,
              "percentile": 98.5
            },
            {
              "raw": 27,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 28,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 29,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 30,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 31,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 32,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 87,
              "percentile": 99.9
            }
          ]
        }
      },
      "30-49": {
        "A": {
          "scale_name": "Inattention / Memory Problems",
          "max_raw": 36,
          "cohort_mean": 12.18,
          "cohort_sd": 6.66,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.4
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.7
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 6.3
            },
            {
              "raw": 3,
              "t_score": 36,
              "percentile": 8.4
            },
            {
              "raw": 4,
              "t_score": 38,
              "percentile": 11
            },
            {
              "raw": 5,
              "t_score": 39,
              "percentile": 14.1
            },
            {
              "raw": 6,
              "t_score": 41,
              "percentile": 17.7
            },
            {
              "raw": 7,
              "t_score": 42,
              "percentile": 21.8
            },
            {
              "raw": 8,
              "t_score": 44,
              "percentile": 26.5
            },
            {
              "raw": 9,
              "t_score": 45,
              "percentile": 31.6
            },
            {
              "raw": 10,
              "t_score": 47,
              "percentile": 37.2
            },
            {
              "raw": 11,
              "t_score": 48,
              "percentile": 43
            },
            {
              "raw": 12,
              "t_score": 50,
              "percentile": 48.9
            },
            {
              "raw": 13,
              "t_score": 51,
              "percentile": 54.9
            },
            {
              "raw": 14,
              "t_score": 53,
              "percentile": 60.7
            },
            {
              "raw": 15,
              "t_score": 54,
              "percentile": 66.4
            },
            {
              "raw": 16,
              "t_score": 56,
              "percentile": 71.7
            },
            {
              "raw": 17,
              "t_score": 57,
              "percentile": 76.5
            },
            {
              "raw": 18,
              "t_score": 59,
              "percentile": 80.9
            },
            {
              "raw": 19,
              "t_score": 60,
              "percentile": 84.7
            },
            {
              "raw": 20,
              "t_score": 62,
              "percentile": 88
            },
            {
              "raw": 21,
              "t_score": 63,
              "percentile": 90.7
            },
            {
              "raw": 22,
              "t_score": 65,
              "percentile": 93
            },
            {
              "raw": 23,
              "t_score": 66,
              "percentile": 94.8
            },
            {
              "raw": 24,
              "t_score": 68,
              "percentile": 96.2
            },
            {
              "raw": 25,
              "t_score": 69,
              "percentile": 97.3
            },
            {
              "raw": 26,
              "t_score": 71,
              "percentile": 98.1
            },
            {
              "raw": 27,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 28,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 29,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 30,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 31,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 32,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 86,
              "percentile": 99.9
            }
          ]
        },
        "B": {
          "scale_name": "Hyperactivity / Restlessness",
          "max_raw": 36,
          "cohort_mean": 10.11,
          "cohort_sd": 6.08,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.8
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 6.7
            },
            {
              "raw": 2,
              "t_score": 37,
              "percentile": 9.1
            },
            {
              "raw": 3,
              "t_score": 38,
              "percentile": 12.1
            },
            {
              "raw": 4,
              "t_score": 40,
              "percentile": 15.7
            },
            {
              "raw": 5,
              "t_score": 42,
              "percentile": 20
            },
            {
              "raw": 6,
              "t_score": 43,
              "percentile": 24.9
            },
            {
              "raw": 7,
              "t_score": 45,
              "percentile": 30.4
            },
            {
              "raw": 8,
              "t_score": 47,
              "percentile": 36.4
            },
            {
              "raw": 9,
              "t_score": 48,
              "percentile": 42.8
            },
            {
              "raw": 10,
              "t_score": 50,
              "percentile": 49.3
            },
            {
              "raw": 11,
              "t_score": 51,
              "percentile": 55.8
            },
            {
              "raw": 12,
              "t_score": 53,
              "percentile": 62.2
            },
            {
              "raw": 13,
              "t_score": 55,
              "percentile": 68.3
            },
            {
              "raw": 14,
              "t_score": 56,
              "percentile": 73.9
            },
            {
              "raw": 15,
              "t_score": 58,
              "percentile": 79
            },
            {
              "raw": 16,
              "t_score": 60,
              "percentile": 83.4
            },
            {
              "raw": 17,
              "t_score": 61,
              "percentile": 87.2
            },
            {
              "raw": 18,
              "t_score": 63,
              "percentile": 90.3
            },
            {
              "raw": 19,
              "t_score": 65,
              "percentile": 92.8
            },
            {
              "raw": 20,
              "t_score": 66,
              "percentile": 94.8
            },
            {
              "raw": 21,
              "t_score": 68,
              "percentile": 96.3
            },
            {
              "raw": 22,
              "t_score": 70,
              "percentile": 97.5
            },
            {
              "raw": 23,
              "t_score": 71,
              "percentile": 98.3
            },
            {
              "raw": 24,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 25,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 26,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 27,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 28,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 29,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "C": {
          "scale_name": "Impulsivity / Emotional Lability",
          "max_raw": 36,
          "cohort_mean": 10.92,
          "cohort_sd": 6.37,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.3
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 6
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 8.1
            },
            {
              "raw": 3,
              "t_score": 38,
              "percentile": 10.7
            },
            {
              "raw": 4,
              "t_score": 39,
              "percentile": 13.9
            },
            {
              "raw": 5,
              "t_score": 41,
              "percentile": 17.6
            },
            {
              "raw": 6,
              "t_score": 42,
              "percentile": 22
            },
            {
              "raw": 7,
              "t_score": 44,
              "percentile": 26.9
            },
            {
              "raw": 8,
              "t_score": 45,
              "percentile": 32.3
            },
            {
              "raw": 9,
              "t_score": 47,
              "percentile": 38.2
            },
            {
              "raw": 10,
              "t_score": 49,
              "percentile": 44.3
            },
            {
              "raw": 11,
              "t_score": 50,
              "percentile": 50.5
            },
            {
              "raw": 12,
              "t_score": 52,
              "percentile": 56.7
            },
            {
              "raw": 13,
              "t_score": 53,
              "percentile": 62.8
            },
            {
              "raw": 14,
              "t_score": 55,
              "percentile": 68.6
            },
            {
              "raw": 15,
              "t_score": 56,
              "percentile": 73.9
            },
            {
              "raw": 16,
              "t_score": 58,
              "percentile": 78.7
            },
            {
              "raw": 17,
              "t_score": 60,
              "percentile": 83
            },
            {
              "raw": 18,
              "t_score": 61,
              "percentile": 86.7
            },
            {
              "raw": 19,
              "t_score": 63,
              "percentile": 89.8
            },
            {
              "raw": 20,
              "t_score": 64,
              "percentile": 92.3
            },
            {
              "raw": 21,
              "t_score": 66,
              "percentile": 94.3
            },
            {
              "raw": 22,
              "t_score": 67,
              "percentile": 95.9
            },
            {
              "raw": 23,
              "t_score": 69,
              "percentile": 97.1
            },
            {
              "raw": 24,
              "t_score": 71,
              "percentile": 98
            },
            {
              "raw": 25,
              "t_score": 72,
              "percentile": 98.6
            },
            {
              "raw": 26,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 27,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 28,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 29,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 30,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 89,
              "percentile": 99.9
            }
          ]
        },
        "D": {
          "scale_name": "Problems with Self-Concept",
          "max_raw": 36,
          "cohort_mean": 8.84,
          "cohort_sd": 5.78,
          "lookup": [
            {
              "raw": 0,
              "t_score": 35,
              "percentile": 6.3
            },
            {
              "raw": 1,
              "t_score": 36,
              "percentile": 8.7
            },
            {
              "raw": 2,
              "t_score": 38,
              "percentile": 11.8
            },
            {
              "raw": 3,
              "t_score": 40,
              "percentile": 15.6
            },
            {
              "raw": 4,
              "t_score": 42,
              "percentile": 20.1
            },
            {
              "raw": 5,
              "t_score": 43,
              "percentile": 25.3
            },
            {
              "raw": 6,
              "t_score": 45,
              "percentile": 31.1
            },
            {
              "raw": 7,
              "t_score": 47,
              "percentile": 37.5
            },
            {
              "raw": 8,
              "t_score": 49,
              "percentile": 44.2
            },
            {
              "raw": 9,
              "t_score": 50,
              "percentile": 51.1
            },
            {
              "raw": 10,
              "t_score": 52,
              "percentile": 57.9
            },
            {
              "raw": 11,
              "t_score": 54,
              "percentile": 64.5
            },
            {
              "raw": 12,
              "t_score": 55,
              "percentile": 70.7
            },
            {
              "raw": 13,
              "t_score": 57,
              "percentile": 76.4
            },
            {
              "raw": 14,
              "t_score": 59,
              "percentile": 81.4
            },
            {
              "raw": 15,
              "t_score": 61,
              "percentile": 85.6
            },
            {
              "raw": 16,
              "t_score": 62,
              "percentile": 89.2
            },
            {
              "raw": 17,
              "t_score": 64,
              "percentile": 92.1
            },
            {
              "raw": 18,
              "t_score": 66,
              "percentile": 94.3
            },
            {
              "raw": 19,
              "t_score": 68,
              "percentile": 96
            },
            {
              "raw": 20,
              "t_score": 69,
              "percentile": 97.3
            },
            {
              "raw": 21,
              "t_score": 71,
              "percentile": 98.2
            },
            {
              "raw": 22,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 23,
              "t_score": 74,
              "percentile": 99.3
            },
            {
              "raw": 24,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 25,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 26,
              "t_score": 80,
              "percentile": 99.8
            },
            {
              "raw": 27,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 28,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 29,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "E": {
          "scale_name": "DSM Inattentive Symptoms",
          "max_raw": 27,
          "cohort_mean": 9.39,
          "cohort_sd": 5.39,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.1
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 6
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 8.5
            },
            {
              "raw": 3,
              "t_score": 38,
              "percentile": 11.8
            },
            {
              "raw": 4,
              "t_score": 40,
              "percentile": 15.9
            },
            {
              "raw": 5,
              "t_score": 42,
              "percentile": 20.8
            },
            {
              "raw": 6,
              "t_score": 44,
              "percentile": 26.5
            },
            {
              "raw": 7,
              "t_score": 46,
              "percentile": 32.9
            },
            {
              "raw": 8,
              "t_score": 47,
              "percentile": 39.9
            },
            {
              "raw": 9,
              "t_score": 49,
              "percentile": 47.1
            },
            {
              "raw": 10,
              "t_score": 51,
              "percentile": 54.5
            },
            {
              "raw": 11,
              "t_score": 53,
              "percentile": 61.8
            },
            {
              "raw": 12,
              "t_score": 55,
              "percentile": 68.6
            },
            {
              "raw": 13,
              "t_score": 57,
              "percentile": 74.9
            },
            {
              "raw": 14,
              "t_score": 59,
              "percentile": 80.4
            },
            {
              "raw": 15,
              "t_score": 60,
              "percentile": 85.1
            },
            {
              "raw": 16,
              "t_score": 62,
              "percentile": 89
            },
            {
              "raw": 17,
              "t_score": 64,
              "percentile": 92.1
            },
            {
              "raw": 18,
              "t_score": 66,
              "percentile": 94.5
            },
            {
              "raw": 19,
              "t_score": 68,
              "percentile": 96.3
            },
            {
              "raw": 20,
              "t_score": 70,
              "percentile": 97.6
            },
            {
              "raw": 21,
              "t_score": 72,
              "percentile": 98.4
            },
            {
              "raw": 22,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 23,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 24,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 25,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 26,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 83,
              "percentile": 99.9
            }
          ]
        },
        "F": {
          "scale_name": "DSM Hyperactive-Impulsive Symptoms",
          "max_raw": 27,
          "cohort_mean": 8.03,
          "cohort_sd": 5,
          "lookup": [
            {
              "raw": 0,
              "t_score": 34,
              "percentile": 5.4
            },
            {
              "raw": 1,
              "t_score": 36,
              "percentile": 8
            },
            {
              "raw": 2,
              "t_score": 38,
              "percentile": 11.4
            },
            {
              "raw": 3,
              "t_score": 40,
              "percentile": 15.7
            },
            {
              "raw": 4,
              "t_score": 42,
              "percentile": 21
            },
            {
              "raw": 5,
              "t_score": 44,
              "percentile": 27.2
            },
            {
              "raw": 6,
              "t_score": 46,
              "percentile": 34.2
            },
            {
              "raw": 7,
              "t_score": 48,
              "percentile": 41.8
            },
            {
              "raw": 8,
              "t_score": 50,
              "percentile": 49.7
            },
            {
              "raw": 9,
              "t_score": 52,
              "percentile": 57.7
            },
            {
              "raw": 10,
              "t_score": 54,
              "percentile": 65.3
            },
            {
              "raw": 11,
              "t_score": 56,
              "percentile": 72.4
            },
            {
              "raw": 12,
              "t_score": 58,
              "percentile": 78.6
            },
            {
              "raw": 13,
              "t_score": 60,
              "percentile": 84
            },
            {
              "raw": 14,
              "t_score": 62,
              "percentile": 88.4
            },
            {
              "raw": 15,
              "t_score": 64,
              "percentile": 91.8
            },
            {
              "raw": 16,
              "t_score": 66,
              "percentile": 94.5
            },
            {
              "raw": 17,
              "t_score": 68,
              "percentile": 96.4
            },
            {
              "raw": 18,
              "t_score": 70,
              "percentile": 97.7
            },
            {
              "raw": 19,
              "t_score": 72,
              "percentile": 98.6
            },
            {
              "raw": 20,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 21,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 22,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 23,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 24,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 25,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 26,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 88,
              "percentile": 99.9
            }
          ]
        },
        "G": {
          "scale_name": "Total ADHD Symptoms",
          "max_raw": 54,
          "cohort_mean": 17.42,
          "cohort_sd": 9.6,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.5
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.4
            },
            {
              "raw": 2,
              "t_score": 34,
              "percentile": 5.4
            },
            {
              "raw": 3,
              "t_score": 35,
              "percentile": 6.7
            },
            {
              "raw": 4,
              "t_score": 36,
              "percentile": 8.1
            },
            {
              "raw": 5,
              "t_score": 37,
              "percentile": 9.8
            },
            {
              "raw": 6,
              "t_score": 38,
              "percentile": 11.7
            },
            {
              "raw": 7,
              "t_score": 39,
              "percentile": 13.9
            },
            {
              "raw": 8,
              "t_score": 40,
              "percentile": 16.3
            },
            {
              "raw": 9,
              "t_score": 41,
              "percentile": 19
            },
            {
              "raw": 10,
              "t_score": 42,
              "percentile": 22
            },
            {
              "raw": 11,
              "t_score": 43,
              "percentile": 25.2
            },
            {
              "raw": 12,
              "t_score": 44,
              "percentile": 28.6
            },
            {
              "raw": 13,
              "t_score": 45,
              "percentile": 32.3
            },
            {
              "raw": 14,
              "t_score": 46,
              "percentile": 36.1
            },
            {
              "raw": 15,
              "t_score": 47,
              "percentile": 40.1
            },
            {
              "raw": 16,
              "t_score": 49,
              "percentile": 44.1
            },
            {
              "raw": 17,
              "t_score": 50,
              "percentile": 48.3
            },
            {
              "raw": 18,
              "t_score": 51,
              "percentile": 52.4
            },
            {
              "raw": 19,
              "t_score": 52,
              "percentile": 56.5
            },
            {
              "raw": 20,
              "t_score": 53,
              "percentile": 60.6
            },
            {
              "raw": 21,
              "t_score": 54,
              "percentile": 64.5
            },
            {
              "raw": 22,
              "t_score": 55,
              "percentile": 68.3
            },
            {
              "raw": 23,
              "t_score": 56,
              "percentile": 71.9
            },
            {
              "raw": 24,
              "t_score": 57,
              "percentile": 75.3
            },
            {
              "raw": 25,
              "t_score": 58,
              "percentile": 78.5
            },
            {
              "raw": 26,
              "t_score": 59,
              "percentile": 81.4
            },
            {
              "raw": 27,
              "t_score": 60,
              "percentile": 84.1
            },
            {
              "raw": 28,
              "t_score": 61,
              "percentile": 86.5
            },
            {
              "raw": 29,
              "t_score": 62,
              "percentile": 88.6
            },
            {
              "raw": 30,
              "t_score": 63,
              "percentile": 90.5
            },
            {
              "raw": 31,
              "t_score": 64,
              "percentile": 92.1
            },
            {
              "raw": 32,
              "t_score": 65,
              "percentile": 93.6
            },
            {
              "raw": 33,
              "t_score": 66,
              "percentile": 94.8
            },
            {
              "raw": 34,
              "t_score": 67,
              "percentile": 95.8
            },
            {
              "raw": 35,
              "t_score": 68,
              "percentile": 96.6
            },
            {
              "raw": 36,
              "t_score": 69,
              "percentile": 97.3
            },
            {
              "raw": 37,
              "t_score": 70,
              "percentile": 97.9
            },
            {
              "raw": 38,
              "t_score": 71,
              "percentile": 98.4
            },
            {
              "raw": 39,
              "t_score": 72,
              "percentile": 98.8
            },
            {
              "raw": 40,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 41,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 42,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 43,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 44,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 45,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 46,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 47,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 48,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 49,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 50,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 51,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 52,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 53,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 54,
              "t_score": 88,
              "percentile": 99.9
            }
          ]
        },
        "H": {
          "scale_name": "ADHD Index",
          "max_raw": 36,
          "cohort_mean": 11.55,
          "cohort_sd": 6.27,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 3.3
            },
            {
              "raw": 1,
              "t_score": 33,
              "percentile": 4.6
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 6.4
            },
            {
              "raw": 3,
              "t_score": 36,
              "percentile": 8.6
            },
            {
              "raw": 4,
              "t_score": 38,
              "percentile": 11.4
            },
            {
              "raw": 5,
              "t_score": 40,
              "percentile": 14.8
            },
            {
              "raw": 6,
              "t_score": 41,
              "percentile": 18.8
            },
            {
              "raw": 7,
              "t_score": 43,
              "percentile": 23.4
            },
            {
              "raw": 8,
              "t_score": 44,
              "percentile": 28.6
            },
            {
              "raw": 9,
              "t_score": 46,
              "percentile": 34.2
            },
            {
              "raw": 10,
              "t_score": 48,
              "percentile": 40.2
            },
            {
              "raw": 11,
              "t_score": 49,
              "percentile": 46.5
            },
            {
              "raw": 12,
              "t_score": 51,
              "percentile": 52.8
            },
            {
              "raw": 13,
              "t_score": 52,
              "percentile": 59.1
            },
            {
              "raw": 14,
              "t_score": 54,
              "percentile": 65.2
            },
            {
              "raw": 15,
              "t_score": 55,
              "percentile": 70.9
            },
            {
              "raw": 16,
              "t_score": 57,
              "percentile": 76.1
            },
            {
              "raw": 17,
              "t_score": 59,
              "percentile": 80.7
            },
            {
              "raw": 18,
              "t_score": 60,
              "percentile": 84.8
            },
            {
              "raw": 19,
              "t_score": 62,
              "percentile": 88.2
            },
            {
              "raw": 20,
              "t_score": 63,
              "percentile": 91.1
            },
            {
              "raw": 21,
              "t_score": 65,
              "percentile": 93.4
            },
            {
              "raw": 22,
              "t_score": 67,
              "percentile": 95.2
            },
            {
              "raw": 23,
              "t_score": 68,
              "percentile": 96.6
            },
            {
              "raw": 24,
              "t_score": 70,
              "percentile": 97.6
            },
            {
              "raw": 25,
              "t_score": 71,
              "percentile": 98.4
            },
            {
              "raw": 26,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 27,
              "t_score": 75,
              "percentile": 99.3
            },
            {
              "raw": 28,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 29,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 30,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 31,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 89,
              "percentile": 99.9
            }
          ]
        }
      },
      "50+": {
        "A": {
          "scale_name": "Inattention / Memory Problems",
          "max_raw": 36,
          "cohort_mean": 10.9,
          "cohort_sd": 6.26,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.1
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 5.7
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 7.7
            },
            {
              "raw": 3,
              "t_score": 37,
              "percentile": 10.3
            },
            {
              "raw": 4,
              "t_score": 39,
              "percentile": 13.5
            },
            {
              "raw": 5,
              "t_score": 41,
              "percentile": 17.3
            },
            {
              "raw": 6,
              "t_score": 42,
              "percentile": 21.7
            },
            {
              "raw": 7,
              "t_score": 44,
              "percentile": 26.6
            },
            {
              "raw": 8,
              "t_score": 45,
              "percentile": 32.1
            },
            {
              "raw": 9,
              "t_score": 47,
              "percentile": 38.1
            },
            {
              "raw": 10,
              "t_score": 49,
              "percentile": 44.3
            },
            {
              "raw": 11,
              "t_score": 50,
              "percentile": 50.6
            },
            {
              "raw": 12,
              "t_score": 52,
              "percentile": 57
            },
            {
              "raw": 13,
              "t_score": 53,
              "percentile": 63.1
            },
            {
              "raw": 14,
              "t_score": 55,
              "percentile": 69
            },
            {
              "raw": 15,
              "t_score": 57,
              "percentile": 74.4
            },
            {
              "raw": 16,
              "t_score": 58,
              "percentile": 79.2
            },
            {
              "raw": 17,
              "t_score": 60,
              "percentile": 83.5
            },
            {
              "raw": 18,
              "t_score": 61,
              "percentile": 87.2
            },
            {
              "raw": 19,
              "t_score": 63,
              "percentile": 90.2
            },
            {
              "raw": 20,
              "t_score": 65,
              "percentile": 92.7
            },
            {
              "raw": 21,
              "t_score": 66,
              "percentile": 94.7
            },
            {
              "raw": 22,
              "t_score": 68,
              "percentile": 96.2
            },
            {
              "raw": 23,
              "t_score": 69,
              "percentile": 97.3
            },
            {
              "raw": 24,
              "t_score": 71,
              "percentile": 98.2
            },
            {
              "raw": 25,
              "t_score": 73,
              "percentile": 98.8
            },
            {
              "raw": 26,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 27,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 28,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 29,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 30,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "B": {
          "scale_name": "Hyperactivity / Restlessness",
          "max_raw": 36,
          "cohort_mean": 9.04,
          "cohort_sd": 5.7,
          "lookup": [
            {
              "raw": 0,
              "t_score": 34,
              "percentile": 5.6
            },
            {
              "raw": 1,
              "t_score": 36,
              "percentile": 7.9
            },
            {
              "raw": 2,
              "t_score": 38,
              "percentile": 10.8
            },
            {
              "raw": 3,
              "t_score": 39,
              "percentile": 14.5
            },
            {
              "raw": 4,
              "t_score": 41,
              "percentile": 18.8
            },
            {
              "raw": 5,
              "t_score": 43,
              "percentile": 23.9
            },
            {
              "raw": 6,
              "t_score": 45,
              "percentile": 29.7
            },
            {
              "raw": 7,
              "t_score": 46,
              "percentile": 36
            },
            {
              "raw": 8,
              "t_score": 48,
              "percentile": 42.7
            },
            {
              "raw": 9,
              "t_score": 50,
              "percentile": 49.7
            },
            {
              "raw": 10,
              "t_score": 52,
              "percentile": 56.7
            },
            {
              "raw": 11,
              "t_score": 53,
              "percentile": 63.4
            },
            {
              "raw": 12,
              "t_score": 55,
              "percentile": 69.8
            },
            {
              "raw": 13,
              "t_score": 57,
              "percentile": 75.6
            },
            {
              "raw": 14,
              "t_score": 59,
              "percentile": 80.8
            },
            {
              "raw": 15,
              "t_score": 60,
              "percentile": 85.2
            },
            {
              "raw": 16,
              "t_score": 62,
              "percentile": 88.9
            },
            {
              "raw": 17,
              "t_score": 64,
              "percentile": 91.8
            },
            {
              "raw": 18,
              "t_score": 66,
              "percentile": 94.2
            },
            {
              "raw": 19,
              "t_score": 67,
              "percentile": 96
            },
            {
              "raw": 20,
              "t_score": 69,
              "percentile": 97.3
            },
            {
              "raw": 21,
              "t_score": 71,
              "percentile": 98.2
            },
            {
              "raw": 22,
              "t_score": 73,
              "percentile": 98.8
            },
            {
              "raw": 23,
              "t_score": 74,
              "percentile": 99.3
            },
            {
              "raw": 24,
              "t_score": 76,
              "percentile": 99.6
            },
            {
              "raw": 25,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 26,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 28,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 29,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "C": {
          "scale_name": "Impulsivity / Emotional Lability",
          "max_raw": 36,
          "cohort_mean": 9.77,
          "cohort_sd": 5.98,
          "lookup": [
            {
              "raw": 0,
              "t_score": 34,
              "percentile": 5.1
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 7.1
            },
            {
              "raw": 2,
              "t_score": 37,
              "percentile": 9.7
            },
            {
              "raw": 3,
              "t_score": 39,
              "percentile": 12.9
            },
            {
              "raw": 4,
              "t_score": 40,
              "percentile": 16.7
            },
            {
              "raw": 5,
              "t_score": 42,
              "percentile": 21.2
            },
            {
              "raw": 6,
              "t_score": 44,
              "percentile": 26.4
            },
            {
              "raw": 7,
              "t_score": 45,
              "percentile": 32.2
            },
            {
              "raw": 8,
              "t_score": 47,
              "percentile": 38.4
            },
            {
              "raw": 9,
              "t_score": 49,
              "percentile": 44.9
            },
            {
              "raw": 10,
              "t_score": 50,
              "percentile": 51.5
            },
            {
              "raw": 11,
              "t_score": 52,
              "percentile": 58.1
            },
            {
              "raw": 12,
              "t_score": 54,
              "percentile": 64.5
            },
            {
              "raw": 13,
              "t_score": 55,
              "percentile": 70.5
            },
            {
              "raw": 14,
              "t_score": 57,
              "percentile": 76
            },
            {
              "raw": 15,
              "t_score": 59,
              "percentile": 80.9
            },
            {
              "raw": 16,
              "t_score": 60,
              "percentile": 85.1
            },
            {
              "raw": 17,
              "t_score": 62,
              "percentile": 88.7
            },
            {
              "raw": 18,
              "t_score": 64,
              "percentile": 91.6
            },
            {
              "raw": 19,
              "t_score": 65,
              "percentile": 93.9
            },
            {
              "raw": 20,
              "t_score": 67,
              "percentile": 95.6
            },
            {
              "raw": 21,
              "t_score": 69,
              "percentile": 97
            },
            {
              "raw": 22,
              "t_score": 70,
              "percentile": 98
            },
            {
              "raw": 23,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 24,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 25,
              "t_score": 75,
              "percentile": 99.5
            },
            {
              "raw": 26,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 27,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 28,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 29,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "D": {
          "scale_name": "Problems with Self-Concept",
          "max_raw": 36,
          "cohort_mean": 7.91,
          "cohort_sd": 5.43,
          "lookup": [
            {
              "raw": 0,
              "t_score": 35,
              "percentile": 7.2
            },
            {
              "raw": 1,
              "t_score": 37,
              "percentile": 10.1
            },
            {
              "raw": 2,
              "t_score": 39,
              "percentile": 13.8
            },
            {
              "raw": 3,
              "t_score": 41,
              "percentile": 18.3
            },
            {
              "raw": 4,
              "t_score": 43,
              "percentile": 23.5
            },
            {
              "raw": 5,
              "t_score": 45,
              "percentile": 29.6
            },
            {
              "raw": 6,
              "t_score": 46,
              "percentile": 36.2
            },
            {
              "raw": 7,
              "t_score": 48,
              "percentile": 43.3
            },
            {
              "raw": 8,
              "t_score": 50,
              "percentile": 50.6
            },
            {
              "raw": 9,
              "t_score": 52,
              "percentile": 57.9
            },
            {
              "raw": 10,
              "t_score": 54,
              "percentile": 65
            },
            {
              "raw": 11,
              "t_score": 56,
              "percentile": 71.5
            },
            {
              "raw": 12,
              "t_score": 58,
              "percentile": 77.4
            },
            {
              "raw": 13,
              "t_score": 59,
              "percentile": 82.6
            },
            {
              "raw": 14,
              "t_score": 61,
              "percentile": 86.9
            },
            {
              "raw": 15,
              "t_score": 63,
              "percentile": 90.4
            },
            {
              "raw": 16,
              "t_score": 65,
              "percentile": 93.2
            },
            {
              "raw": 17,
              "t_score": 67,
              "percentile": 95.3
            },
            {
              "raw": 18,
              "t_score": 69,
              "percentile": 96.8
            },
            {
              "raw": 19,
              "t_score": 70,
              "percentile": 97.9
            },
            {
              "raw": 20,
              "t_score": 72,
              "percentile": 98.7
            },
            {
              "raw": 21,
              "t_score": 74,
              "percentile": 99.2
            },
            {
              "raw": 22,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 23,
              "t_score": 78,
              "percentile": 99.7
            },
            {
              "raw": 24,
              "t_score": 80,
              "percentile": 99.8
            },
            {
              "raw": 25,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 26,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 28,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 29,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "E": {
          "scale_name": "DSM Inattentive Symptoms",
          "max_raw": 27,
          "cohort_mean": 8.4,
          "cohort_sd": 5.06,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.8
            },
            {
              "raw": 1,
              "t_score": 35,
              "percentile": 7.2
            },
            {
              "raw": 2,
              "t_score": 37,
              "percentile": 10.3
            },
            {
              "raw": 3,
              "t_score": 39,
              "percentile": 14.3
            },
            {
              "raw": 4,
              "t_score": 41,
              "percentile": 19.2
            },
            {
              "raw": 5,
              "t_score": 43,
              "percentile": 25.1
            },
            {
              "raw": 6,
              "t_score": 45,
              "percentile": 31.8
            },
            {
              "raw": 7,
              "t_score": 47,
              "percentile": 39.1
            },
            {
              "raw": 8,
              "t_score": 49,
              "percentile": 46.9
            },
            {
              "raw": 9,
              "t_score": 51,
              "percentile": 54.7
            },
            {
              "raw": 10,
              "t_score": 53,
              "percentile": 62.4
            },
            {
              "raw": 11,
              "t_score": 55,
              "percentile": 69.6
            },
            {
              "raw": 12,
              "t_score": 57,
              "percentile": 76.2
            },
            {
              "raw": 13,
              "t_score": 59,
              "percentile": 81.8
            },
            {
              "raw": 14,
              "t_score": 61,
              "percentile": 86.6
            },
            {
              "raw": 15,
              "t_score": 63,
              "percentile": 90.4
            },
            {
              "raw": 16,
              "t_score": 65,
              "percentile": 93.3
            },
            {
              "raw": 17,
              "t_score": 67,
              "percentile": 95.5
            },
            {
              "raw": 18,
              "t_score": 69,
              "percentile": 97.1
            },
            {
              "raw": 19,
              "t_score": 71,
              "percentile": 98.2
            },
            {
              "raw": 20,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 21,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 22,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 23,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 24,
              "t_score": 81,
              "percentile": 99.9
            },
            {
              "raw": 25,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 26,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 87,
              "percentile": 99.9
            }
          ]
        },
        "F": {
          "scale_name": "DSM Hyperactive-Impulsive Symptoms",
          "max_raw": 27,
          "cohort_mean": 7.19,
          "cohort_sd": 4.69,
          "lookup": [
            {
              "raw": 0,
              "t_score": 35,
              "percentile": 6.3
            },
            {
              "raw": 1,
              "t_score": 37,
              "percentile": 9.4
            },
            {
              "raw": 2,
              "t_score": 39,
              "percentile": 13.4
            },
            {
              "raw": 3,
              "t_score": 41,
              "percentile": 18.6
            },
            {
              "raw": 4,
              "t_score": 43,
              "percentile": 24.9
            },
            {
              "raw": 5,
              "t_score": 45,
              "percentile": 32.1
            },
            {
              "raw": 6,
              "t_score": 47,
              "percentile": 40
            },
            {
              "raw": 7,
              "t_score": 50,
              "percentile": 48.4
            },
            {
              "raw": 8,
              "t_score": 52,
              "percentile": 56.9
            },
            {
              "raw": 9,
              "t_score": 54,
              "percentile": 65
            },
            {
              "raw": 10,
              "t_score": 56,
              "percentile": 72.6
            },
            {
              "raw": 11,
              "t_score": 58,
              "percentile": 79.2
            },
            {
              "raw": 12,
              "t_score": 60,
              "percentile": 84.8
            },
            {
              "raw": 13,
              "t_score": 62,
              "percentile": 89.2
            },
            {
              "raw": 14,
              "t_score": 65,
              "percentile": 92.7
            },
            {
              "raw": 15,
              "t_score": 67,
              "percentile": 95.2
            },
            {
              "raw": 16,
              "t_score": 69,
              "percentile": 97
            },
            {
              "raw": 17,
              "t_score": 71,
              "percentile": 98.2
            },
            {
              "raw": 18,
              "t_score": 73,
              "percentile": 98.9
            },
            {
              "raw": 19,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 20,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 21,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 22,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 23,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 24,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 25,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 26,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 27,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "G": {
          "scale_name": "Total ADHD Symptoms",
          "max_raw": 54,
          "cohort_mean": 15.58,
          "cohort_sd": 9.02,
          "lookup": [
            {
              "raw": 0,
              "t_score": 33,
              "percentile": 4.2
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 5.3
            },
            {
              "raw": 2,
              "t_score": 35,
              "percentile": 6.6
            },
            {
              "raw": 3,
              "t_score": 36,
              "percentile": 8.1
            },
            {
              "raw": 4,
              "t_score": 37,
              "percentile": 9.9
            },
            {
              "raw": 5,
              "t_score": 38,
              "percentile": 12
            },
            {
              "raw": 6,
              "t_score": 39,
              "percentile": 14.4
            },
            {
              "raw": 7,
              "t_score": 40,
              "percentile": 17.1
            },
            {
              "raw": 8,
              "t_score": 42,
              "percentile": 20
            },
            {
              "raw": 9,
              "t_score": 43,
              "percentile": 23.3
            },
            {
              "raw": 10,
              "t_score": 44,
              "percentile": 26.8
            },
            {
              "raw": 11,
              "t_score": 45,
              "percentile": 30.6
            },
            {
              "raw": 12,
              "t_score": 46,
              "percentile": 34.5
            },
            {
              "raw": 13,
              "t_score": 47,
              "percentile": 38.7
            },
            {
              "raw": 14,
              "t_score": 48,
              "percentile": 43
            },
            {
              "raw": 15,
              "t_score": 49,
              "percentile": 47.4
            },
            {
              "raw": 16,
              "t_score": 50,
              "percentile": 51.8
            },
            {
              "raw": 17,
              "t_score": 52,
              "percentile": 56.2
            },
            {
              "raw": 18,
              "t_score": 53,
              "percentile": 60.6
            },
            {
              "raw": 19,
              "t_score": 54,
              "percentile": 64.8
            },
            {
              "raw": 20,
              "t_score": 55,
              "percentile": 68.8
            },
            {
              "raw": 21,
              "t_score": 56,
              "percentile": 72.6
            },
            {
              "raw": 22,
              "t_score": 57,
              "percentile": 76.2
            },
            {
              "raw": 23,
              "t_score": 58,
              "percentile": 79.5
            },
            {
              "raw": 24,
              "t_score": 59,
              "percentile": 82.5
            },
            {
              "raw": 25,
              "t_score": 60,
              "percentile": 85.2
            },
            {
              "raw": 26,
              "t_score": 62,
              "percentile": 87.6
            },
            {
              "raw": 27,
              "t_score": 63,
              "percentile": 89.7
            },
            {
              "raw": 28,
              "t_score": 64,
              "percentile": 91.6
            },
            {
              "raw": 29,
              "t_score": 65,
              "percentile": 93.2
            },
            {
              "raw": 30,
              "t_score": 66,
              "percentile": 94.5
            },
            {
              "raw": 31,
              "t_score": 67,
              "percentile": 95.6
            },
            {
              "raw": 32,
              "t_score": 68,
              "percentile": 96.6
            },
            {
              "raw": 33,
              "t_score": 69,
              "percentile": 97.3
            },
            {
              "raw": 34,
              "t_score": 70,
              "percentile": 97.9
            },
            {
              "raw": 35,
              "t_score": 72,
              "percentile": 98.4
            },
            {
              "raw": 36,
              "t_score": 73,
              "percentile": 98.8
            },
            {
              "raw": 37,
              "t_score": 74,
              "percentile": 99.1
            },
            {
              "raw": 38,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 39,
              "t_score": 76,
              "percentile": 99.5
            },
            {
              "raw": 40,
              "t_score": 77,
              "percentile": 99.7
            },
            {
              "raw": 41,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 42,
              "t_score": 79,
              "percentile": 99.8
            },
            {
              "raw": 43,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 44,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 45,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 46,
              "t_score": 84,
              "percentile": 99.9
            },
            {
              "raw": 47,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 48,
              "t_score": 86,
              "percentile": 99.9
            },
            {
              "raw": 49,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 50,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 51,
              "t_score": 89,
              "percentile": 99.9
            },
            {
              "raw": 52,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 53,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 54,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        },
        "H": {
          "scale_name": "ADHD Index",
          "max_raw": 36,
          "cohort_mean": 10.34,
          "cohort_sd": 5.89,
          "lookup": [
            {
              "raw": 0,
              "t_score": 32,
              "percentile": 4
            },
            {
              "raw": 1,
              "t_score": 34,
              "percentile": 5.6
            },
            {
              "raw": 2,
              "t_score": 36,
              "percentile": 7.8
            },
            {
              "raw": 3,
              "t_score": 38,
              "percentile": 10.6
            },
            {
              "raw": 4,
              "t_score": 39,
              "percentile": 14.1
            },
            {
              "raw": 5,
              "t_score": 41,
              "percentile": 18.2
            },
            {
              "raw": 6,
              "t_score": 43,
              "percentile": 23.1
            },
            {
              "raw": 7,
              "t_score": 44,
              "percentile": 28.6
            },
            {
              "raw": 8,
              "t_score": 46,
              "percentile": 34.6
            },
            {
              "raw": 9,
              "t_score": 48,
              "percentile": 41
            },
            {
              "raw": 10,
              "t_score": 49,
              "percentile": 47.7
            },
            {
              "raw": 11,
              "t_score": 51,
              "percentile": 54.5
            },
            {
              "raw": 12,
              "t_score": 53,
              "percentile": 61.1
            },
            {
              "raw": 13,
              "t_score": 55,
              "percentile": 67.5
            },
            {
              "raw": 14,
              "t_score": 56,
              "percentile": 73.3
            },
            {
              "raw": 15,
              "t_score": 58,
              "percentile": 78.6
            },
            {
              "raw": 16,
              "t_score": 60,
              "percentile": 83.2
            },
            {
              "raw": 17,
              "t_score": 61,
              "percentile": 87.1
            },
            {
              "raw": 18,
              "t_score": 63,
              "percentile": 90.3
            },
            {
              "raw": 19,
              "t_score": 65,
              "percentile": 92.9
            },
            {
              "raw": 20,
              "t_score": 66,
              "percentile": 95
            },
            {
              "raw": 21,
              "t_score": 68,
              "percentile": 96.5
            },
            {
              "raw": 22,
              "t_score": 70,
              "percentile": 97.6
            },
            {
              "raw": 23,
              "t_score": 72,
              "percentile": 98.4
            },
            {
              "raw": 24,
              "t_score": 73,
              "percentile": 99
            },
            {
              "raw": 25,
              "t_score": 75,
              "percentile": 99.4
            },
            {
              "raw": 26,
              "t_score": 77,
              "percentile": 99.6
            },
            {
              "raw": 27,
              "t_score": 78,
              "percentile": 99.8
            },
            {
              "raw": 28,
              "t_score": 80,
              "percentile": 99.9
            },
            {
              "raw": 29,
              "t_score": 82,
              "percentile": 99.9
            },
            {
              "raw": 30,
              "t_score": 83,
              "percentile": 99.9
            },
            {
              "raw": 31,
              "t_score": 85,
              "percentile": 99.9
            },
            {
              "raw": 32,
              "t_score": 87,
              "percentile": 99.9
            },
            {
              "raw": 33,
              "t_score": 88,
              "percentile": 99.9
            },
            {
              "raw": 34,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 35,
              "t_score": 90,
              "percentile": 99.9
            },
            {
              "raw": 36,
              "t_score": 90,
              "percentile": 99.9
            }
          ]
        }
      }
    }
  }
};

const CAARS_METADATA = {
  "version": "1.0",
  "standard_mean": 50,
  "standard_sd": 10
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CAARS_NORMS, CAARS_METADATA };
}
if (typeof window !== 'undefined') {
  window.CAARS_NORMS = CAARS_NORMS;
  window.CAARS_METADATA = CAARS_METADATA;
}
