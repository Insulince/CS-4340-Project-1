"use strict";

const PRESET_DATA = [
    "TRAINING DATA: (A, -43, 35) (A, 12, 46) (A, -36, 26) (A, 49, 2) (A, -40, 22) (A, 43, 35) (A, -5, 30) (A, -38, 6) (A, 7, 23) (A, 31, 35) (A, -43, 37) (A, -23, 37) (A, -48, 47) (A, 21, 36) (A, 5, 32) (A, 19, 10) (A, -37, 16) (A, 7, 20) (A, 30, 18) (A, -5, 28) (A, 11, 21) (A, -50, 44) (A, 47, 14) (A, 3, 20) (A, -46, 39) (B, 2, -35) (B, 33, -29) (B, 36, -48) (B, -32, -21) (B, 38, -2) (B, 27, -28) (B, -36, -4) (B, -22, -34) (B, -40, -33) (B, 3, -33) (B, -41, -44) (B, 2, -6) (B, -21, -36) (B, 47, -11) (B, -11, -48) (B, -26, -29) (B, -17, -50) (B, 12, -23) (B, -22, -17) (B, -46, -3) (B, -29, -13) (B, -11, -28) (B, 36, -14) (B, 40, -19) (B, -11, -44); TESTING DATA: (-12, -50) (15, -3) (26, -33) (36, -17) (-38, -46) (9, -19) (-43, -19) (20, 8) (37, -30) (-28, -6) (-44, 25) (-46, -42) (-45, 49) (-30, 5) (-48, -7) (-39, 30) (-50, 15) (-10, -46) (50, 39) (47, -32) (-27, 42) (14, 41) (34, -29) (31, -5) (-9, -4) (-38, 28) (-5, -7) (6, 39) (-46, 42) (-2, -10)",
    "TRAINING DATA: (A, -19, 37) (A, -14, 8) (A, 24, 22) (A, 27, 34) (A, 1, 8) (A, 35, 4) (A, -36, 41) (A, -45, 33) (A, -9, 19) (A, -34, 6) (A, 42, 49) (A, 13, 10) (A, 38, 28) (A, -31, 9) (A, -23, 5) (A, -19, 2) (A, -33, 1) (A, -13, 23) (A, -13, 19) (A, 44, 25) (A, -28, 45) (A, 50, 34) (A, 13, 42) (A, -16, 8) (A, 31, 22) (A, 21, 50) (A, 44, 10) (A, -50, 38) (A, -24, 38) (A, 48, 28) (A, 27, 20) (A, 12, 49) (A, -32, 25) (A, -46, 11) (A, -38, 23) (A, 16, 24) (A, 29, 46) (A, -31, 14) (A, -8, 28) (A, 15, 26) (A, 36, 42) (A, -23, 45) (A, 4, 43) (A, 30, 30) (A, 25, 11) (A, -5, 6) (A, 42, 4) (A, 3, 45) (A, 34, 48) (A, 10, 3) (A, -30, 40) (A, -44, 2) (A, 49, 18) (A, -30, 2) (A, 36, 17) (A, 29, 13) (A, 38, 48) (A, 22, 15) (A, -5, 27) (A, 12, 37) (A, -4, 20) (A, 27, 38) (A, 3, 47) (A, 11, 10) (A, -38, 5) (A, 14, 17) (A, -45, 35) (A, -1, 46) (A, 24, 49) (A, 29, 9) (A, -50, 12) (A, -10, 35) (A, 50, 28) (A, 46, 22) (A, -48, 6) (A, -19, 13) (A, -24, 22) (A, -4, 25) (A, 18, 42) (A, 3, 48) (A, -20, 7) (A, 31, 38) (A, 19, 13) (A, 39, 38) (A, -5, 13) (A, -25, 18) (A, -41, 29) (A, 5, 5) (A, -31, 4) (A, -12, 9) (A, 39, 36) (A, -45, 11) (A, 7, 37) (A, -29, 20) (A, -21, 30) (A, -42, 30) (A, 23, 26) (A, 34, 20) (A, -46, 41) (A, 14, 46) (A, -36, 23) (A, 44, 4) (A, -45, 1) (A, 9, 40) (A, -41, 3) (A, 9, 16) (A, 42, 30) (A, -5, 10) (A, -39, 14) (A, 30, 48) (A, 15, 36) (A, 12, 9) (A, -50, 42) (A, -1, 20) (A, -28, 38) (A, -47, 48) (A, -27, 9) (A, 45, 2) (A, 41, 29) (A, -47, 32) (A, -19, 15) (A, 40, 46) (A, -21, 20) (A, -39, 31) (A, 2, 12) (A, 7, 16) (A, -34, 34) (A, -10, 31) (A, -33, 20) (A, -41, 50) (A, 10, 14) (A, -40, 7) (A, -49, 12) (A, -50, 31) (A, -50, 48) (A, 20, 26) (A, -37, 7) (A, -42, 44) (A, -31, 40) (A, -18, 37) (A, -43, 42) (A, -31, 30) (A, 46, 13) (A, -13, 23) (A, -37, 46) (A, 22, 4) (A, -2, 47) (A, -42, 25) (A, -21, 7) (A, -32, 7) (A, 21, 5) (A, -29, 29) (A, -39, 39) (A, -19, 5) (A, -19, 38) (A, -42, 34) (A, -37, 20) (A, 4, 38) (A, 45, 25) (A, -5, 40) (A, -44, 2) (A, -6, 28) (A, -20, 29) (A, -30, 34) (A, -9, 4) (A, 11, 38) (A, 34, 5) (A, 40, 10) (A, 2, 29) (A, 27, 7) (A, 10, 23) (A, 20, 10) (A, 42, 5) (A, 32, 12) (A, -29, 15) (A, -32, 10) (A, -40, 48) (A, -6, 35) (A, -1, 32) (A, 37, 20) (A, 10, 31) (A, 2, 36) (A, -8, 13) (A, -36, 34) (A, 50, 12) (A, 42, 46) (A, 27, 14) (A, -28, 50) (A, -14, 4) (A, 42, 9) (A, -44, 46) (A, 42, 18) (A, 50, 47) (A, -39, 39) (A, 44, 3) (A, -40, 28) (A, 37, 31) (A, -49, 17) (A, 43, 12) (A, -17, 47) (A, -38, 32) (A, 42, 30) (A, 12, 10) (A, -25, 24) (A, -46, 31) (A, -19, 7) (A, 12, 1) (A, -50, 25) (A, 11, 13) (A, -40, 35) (A, 33, 2) (A, 38, 26) (A, 34, 38) (A, 1, 27) (A, -21, 4) (A, -19, 20) (A, -5, 32) (A, -48, 24) (A, -29, 41) (A, -19, 31) (A, -45, 9) (A, -18, 50) (A, 24, 32) (A, 7, 21) (A, 49, 16) (A, 28, 40) (A, 33, 35) (A, -33, 24) (A, 49, 47) (A, -16, 18) (A, 21, 35) (A, -27, 14) (A, 19, 11) (A, -31, 16) (A, -36, 47) (A, 18, 12) (A, 3, 14) (A, -2, 9) (A, -27, 32) (A, -44, 44) (A, 50, 12) (A, -2, 10) (A, -17, 27) (A, -42, 7) (A, 10, 48) (A, 43, 49) (A, -46, 8) (A, 21, 22) (A, -49, 35) (A, -17, 15) (B, 48, -8) (B, 50, -17) (B, -43, -20) (B, 19, -39) (B, -32, -48) (B, -3, -50) (B, -4, -38) (B, 10, -34) (B, -38, -1) (B, -46, -2) (B, -49, -49) (B, 28, -29) (B, -48, -3) (B, 47, -37) (B, -20, -10) (B, -25, -40) (B, -26, -11) (B, 46, -41) (B, -47, -42) (B, 15, -18) (B, -48, -33) (B, -10, -36) (B, -28, -16) (B, -50, -27) (B, 39, -33) (B, 13, -31) (B, 31, -40) (B, -14, -1) (B, -22, -8) (B, 10, -15) (B, 42, -30) (B, 50, -4) (B, -20, -42) (B, -14, -1) (B, 15, -34) (B, -33, -11) (B, -31, -2) (B, 41, -8) (B, 25, -50) (B, 26, -4) (B, -30, -22) (B, 17, -31) (B, 3, -9) (B, 20, -28) (B, -31, -14) (B, 28, -48) (B, 22, -42) (B, -4, -31) (B, 35, -39) (B, -24, -49) (B, 47, -42) (B, 14, -25) (B, 40, -2) (B, -48, -27) (B, -10, -29) (B, -1, -48) (B, -13, -45) (B, -25, -24) (B, -1, -33) (B, -35, -23) (B, -25, -2) (B, 28, -5) (B, 24, -20) (B, 15, -45) (B, 17, -31) (B, 48, -12) (B, 24, -24) (B, 22, -11) (B, -44, -13) (B, 7, -49) (B, 12, -40) (B, 19, -23) (B, -49, -35) (B, 46, -30) (B, -35, -15) (B, -6, -48) (B, 0, -33) (B, 11, -23) (B, -31, -4) (B, -35, -27) (B, 20, -41) (B, -29, -26) (B, 37, -28) (B, 39, -3) (B, 36, -43) (B, -40, -18) (B, -6, -28) (B, -36, -36) (B, 35, -15) (B, 11, -22) (B, -23, -1) (B, 17, -36) (B, 30, -11) (B, -30, -45) (B, -41, -28) (B, 21, -20) (B, -43, -35) (B, -35, -37) (B, -2, -11) (B, -7, -23) (B, 18, -3) (B, 32, -13) (B, 12, -40) (B, 10, -44) (B, -35, -47) (B, 33, -12) (B, 15, -1) (B, 48, -32) (B, 30, -24) (B, -4, -26) (B, -10, -2) (B, -4, -19) (B, -19, -35) (B, -26, -34) (B, -47, -32) (B, -15, -39) (B, -41, -45) (B, -1, -2) (B, 25, -5) (B, 25, -2) (B, 37, -29) (B, 42, -17) (B, 45, -32) (B, 24, -41) (B, -43, -14) (B, 0, -47) (B, -36, -13) (B, 34, -1) (B, -35, -13) (B, 1, -29) (B, 22, -36) (B, 18, -41) (B, -30, -6) (B, 2, -11) (B, -26, -31) (B, 47, -26) (B, 43, -29) (B, -33, -25) (B, 30, -29) (B, 42, -40) (B, -41, -20) (B, 50, -49) (B, -44, -49) (B, 30, -42) (B, -16, -43) (B, -14, -7) (B, 36, -7) (B, 5, -11) (B, 50, -22) (B, -43, -14) (B, 49, -2) (B, -22, -5) (B, -31, -25) (B, -22, -36) (B, 20, -42) (B, -3, -21) (B, 26, -46) (B, -21, -1) (B, -47, -42) (B, 25, -41) (B, 50, -5) (B, -45, -44) (B, -1, -46) (B, 2, -26) (B, -13, -4) (B, 26, -12) (B, -11, -36) (B, 16, -16) (B, -10, -26) (B, 47, -14) (B, -44, -28) (B, 16, -12) (B, 32, -16) (B, -13, -46) (B, -17, -41) (B, 35, -29) (B, 6, -22) (B, 45, -16) (B, 30, -50) (B, 18, -38) (B, -30, -10) (B, -31, -40) (B, -38, -17) (B, 25, -41) (B, -18, -1) (B, 43, -10) (B, 42, -36) (B, -10, -2) (B, -25, -11) (B, -44, -29) (B, -23, -1) (B, 12, -16) (B, 36, -26) (B, 6, -21) (B, -40, -50) (B, 4, -28) (B, -40, -27) (B, 23, -47) (B, 18, -39) (B, 35, -34) (B, 47, -32) (B, -33, -48) (B, 9, -50) (B, -19, -35) (B, -8, -34) (B, -46, -22) (B, 23, -14) (B, -28, -8) (B, -14, -15) (B, -15, -19) (B, 12, -26) (B, 27, -37) (B, 42, -38) (B, 16, -43) (B, 35, -12) (B, 16, -38) (B, 37, -7) (B, 16, -2) (B, -5, -44) (B, -27, -9) (B, 20, -20) (B, -9, -11) (B, 32, -21) (B, -18, -41) (B, 32, -27) (B, -24, -20) (B, -34, -26) (B, 6, -45) (B, -38, -50) (B, -25, -2) (B, -38, -30) (B, -21, -39) (B, -2, -41) (B, -49, -46) (B, 16, -5) (B, 42, -22) (B, 39, -38) (B, -4, -9) (B, 17, -38) (B, 15, -15) (B, 13, -13) (B, -42, -10) (B, -7, -25) (B, 33, -19) (B, 50, -50) (B, 41, -22) (B, -33, -23) (B, -30, -45) (B, -29, -37) (B, 29, -33); TESTING DATA: (-21, 16) (31, -25) (0, 10) (42, -42) (8, -3) (48, 5) (-29, -5) (7, -47) (-46, 10) (20, -24) (42, -29) (-2, -8) (-25, -18) (23, -28) (-11, 12) (41, -34) (14, -28) (0, -2) (-12, -33) (-3, 16) (-20, 49) (-35, 16) (-39, -7) (23, 19) (-49, 25) (-38, 47) (12, 48) (-12, -49) (-23, -22) (35, -17) (29, 28) (0, -49) (-48, -13) (40, 36) (11, 44) (-43, 39) (-41, -49) (0, 42) (-34, -1) (-34, -41) (4, -3) (14, 1) (-30, 37) (15, 11) (-15, 45) (-35, 8) (45, -16) (27, -26) (-15, 29) (-35, 42) (-42, 27) (-28, 3) (28, -5) (34, -49) (41, 42) (-16, 47) (-23, -45) (6, 33) (-50, -45) (29, 12) (-11, 8) (-46, -17) (23, -38) (31, -20) (-21, 21) (-28, 44) (-1, 35) (-47, 5) (-19, -44) (-10, 27) (46, 39) (21, 29) (-26, 33) (-38, -31) (25, -34) (22, -8) (-40, -11) (-7, 8) (8, -5) (-37, 47) (19, -21) (-47, 43) (-15, 38) (9, -38) (-4, 32) (38, -46) (-45, 37) (-49, -31) (46, -7) (-1, 2) (-30, -21) (17, 5) (14, -27) (-18, 7) (44, -2) (-48, -2) (-5, -14) (29, 5) (-30, -8) (25, 43) (-16, 13) (45, -49) (40, 21) (-35, -2) (39, 14) (11, 24) (47, 31) (49, 21) (1, 21) (19, -33) (-14, 25) (-39, 20) (19, 44) (28, -36) (-37, -23) (-27, 35) (16, 20) (-33, 28) (-17, 37) (22, -4) (40, 50) (-32, -7) (-9, 41) (3, 43) (18, 21) (7, -7) (-8, 27) (12, 14) (-6, 41) (38, 16) (36, -36) (43, 39) (5, -33) (24, -16) (34, 10) (-4, -49) (45, 1) (8, -6) (-32, -43) (39, -49) (41, 29) (-17, -17) (-13, -50) (-42, -40) (35, 44) (-34, -12) (49, 37) (41, 26) (-21, -18) (-30, 35) (29, 5) (48, -38) (-17, 3) (-30, -7) (28, -49) (-21, 0) (-2, 46) (4, -41) (30, 7) (-37, -8) (-32, -16) (8, 24) (-19, -18) (38, -4) (45, 39) (-27, -30) (33, -35) (32, 12) (12, 0) (15, 35) (43, 23) (10, -49) (42, 19) (-19, -16) (-2, 2) (16, -8) (-37, 10) (11, -22) (-37, 30) (45, 30) (-30, 34) (-44, -41) (-39, -2) (-14, 10) (24, 41) (-43, -46) (11, 48) (8, 28) (-29, -9) (5, 49) (-26, -31) (47, 7) (-17, -50) (21, -34) (-16, -19) (-49, -35) (-46, -5) (-4, -30) (8, 30) (-16, -28) (-45, 44) (-29, -1) (30, -38) (-20, 37) (49, 39) (23, -23) (0, 22) (-19, -16) (-41, -49) (-24, 25) (-18, 44) (-2, -8) (35, 22) (-26, 43) (22, 7) (11, -25) (-14, -27) (-50, -30) (22, 7) (0, -40) (19, -14) (12, 5) (-47, -31) (-36, 5) (-44, 41) (-32, -15) (43, 29) (-10, 31) (42, -12) (-38, 9) (-39, 48) (37, -15) (29, 30) (22, 2) (-27, -4) (-18, 30) (-37, 2) (-36, -41) (19, -20) (22, 2) (-36, 22) (-16, -33) (19, -24) (43, -17) (39, 4) (50, -50) (0, -23) (-30, 4) (29, 21) (-11, -19) (-41, -32) (-26, 42) (16, 47) (-24, -33) (43, -31) (0, 18) (-32, -10) (45, 26) (35, -1) (49, -1) (26, 1) (44, 9) (-25, -21) (32, -3) (31, 13) (-19, -4) (9, 30) (-49, -1) (-44, 15) (50, 21) (-6, 14) (-45, -14) (28, 34) (-2, 11) (16, 45) (45, 0) (3, 27) (-27, 42) (-37, 17) (-30, 43) (-46, -36) (12, 49) (40, 42) (48, 18) (6, -24) (19, -39) (-48, -28) (46, -21) (21, -48) (19, -36) (11, -9) (48, 50) (45, -26) (-1, -28) (2, 25) (-8, -5) (-21, 12) (41, 32) (14, -5) (-29, 41)",
    "TRAINING DATA: (A, 23, 38) (A, -46, 6) (A, 47, 28) (A, 34, 50) (A, 26, 38) (A, 12, 42) (A, 22, 0) (A, -6, -24) (A, 24, -31) (A, 22, 44) (A, 19, 37) (A, 9, -12) (A, -9, 1) (A, 24, 26) (A, -23, -11) (A, 37, -21) (A, 38, 1) (A, -26, 34) (A, 44, 36) (A, 11, -16) (A, 42, 45) (A, 7, 41) (A, -44, -6) (A, 47, -44) (A, -11, -49) (A, 43, 47) (A, 29, -5) (A, -41, -41) (A, 43, 37) (A, 39, 44) (A, 25, 8) (A, 13, 25) (A, -26, 6) (A, -39, 27) (A, -41, -35) (A, 8, 14) (A, 32, 40) (A, 16, 46) (A, 2, 9) (A, -15, -26) (A, -13, -22) (A, 4, 5) (A, -22, 32) (A, -30, 31) (A, 49, 33) (A, -47, 50) (A, -7, -36) (A, -19, -6) (A, 21, 37) (A, -39, -50) (A, 11, -19) (A, 12, -35) (A, -23, 27) (A, 27, 32) (A, 10, -3) (A, -36, 44) (A, -49, -38) (A, 10, 24) (A, -2, 37) (A, -16, 4) (A, 28, 22) (A, -8, -16) (A, 42, 45) (A, 8, 35) (A, -11, 13) (A, -39, -7) (A, -27, -36) (A, -7, -20) (A, -25, -38) (A, 0, 10) (A, 25, 35) (A, 48, -19) (A, -29, -17) (A, 13, -27) (A, -30, 35) (A, 8, 16) (A, 26, -25) (A, -38, -5) (A, 17, 28) (A, -35, 38) (A, 42, -1) (A, 39, 5) (A, -5, 19) (A, -48, -12) (A, -50, 37) (A, 25, -11) (A, -16, 14) (A, -12, -26) (A, -10, 30) (A, 14, -41) (A, -15, 14) (A, -24, 25) (A, -36, -7) (A, 29, -18) (A, -19, 22) (A, -28, 9) (A, 28, -8) (A, 20, 33) (A, 16, 46) (A, -36, -20) (A, 37, 21) (A, -13, -2) (A, -50, -41) (A, -35, -19) (A, -37, -32) (A, -20, -29) (A, -42, -28) (A, -20, -33) (A, -35, 44) (A, 20, 29) (A, -33, 0) (A, 5, 15) (A, 24, -24) (A, 30, -33) (A, 37, 8) (A, -19, 29) (A, 43, 8) (A, 8, 37) (A, -19, 20) (A, 20, 12) (A, 7, 17) (A, -47, 14) (A, 32, -30) (A, 44, -29) (A, -34, -10) (A, -12, -21) (A, -22, -37) (A, 14, -47) (A, -28, -36) (A, -31, -46) (A, -40, -35) (A, -47, 47) (A, -27, -15) (A, 18, -6) (A, -42, -37) (A, -26, 30) (A, -27, 45) (A, -7, 26) (A, -50, 30) (A, 28, 43) (A, -35, -21) (A, -28, 4) (A, 17, 8) (A, 11, 8) (A, 21, -1) (A, 29, -21) (A, 18, -8) (A, 4, -39) (A, -50, 15) (A, -47, -42) (A, -37, -46) (A, 28, -44) (A, -19, -46) (A, 4, 3) (A, 11, 30) (A, -27, -45) (A, -2, 12) (A, 29, -11) (A, -49, -5) (A, -17, -27) (A, 0, -3) (A, -1, -26) (A, -38, -37) (A, 12, -43) (A, 30, 6) (A, -50, 21) (A, 5, 40) (A, -11, 50) (A, -27, -20) (A, 48, 24) (A, 26, -37) (A, 4, 22) (A, 2, -28) (A, -35, 27) (A, 16, -4) (A, -27, -41) (A, 4, -35) (A, 1, -8) (A, 16, -24) (A, 18, -20) (A, 50, 47) (A, 43, -16) (A, 38, 20) (A, 37, 16) (A, -33, -46) (A, -33, -29) (A, 26, 37) (A, -50, 26) (A, -32, 7) (A, -14, -47) (A, 16, 18) (A, 38, 27) (A, 22, 1) (A, 19, -23) (A, 0, -50) (A, 38, -11) (A, 19, 21) (A, 16, 33) (A, -15, -42) (A, 2, -37) (A, -27, -43) (A, -3, 27) (A, 24, 12) (A, 18, -19) (A, 26, -5) (A, 26, -40) (A, 36, -13) (A, -3, 23) (A, 8, -42) (A, -34, 39) (A, -25, -22) (A, -25, 50) (A, 18, -9) (A, 37, 27) (A, 16, -12) (A, -28, 12) (A, -24, -45) (A, -32, 44) (A, 15, -22) (A, 44, -45) (A, 12, -14) (A, -6, 27) (A, 3, -12) (A, -26, -44) (A, -48, -4) (A, -34, -19) (A, -37, -5) (A, 4, -49) (A, 17, 36) (A, 22, 25) (A, 35, -12) (A, 22, 11) (A, -14, 39) (A, -23, -7) (A, 0, -35) (A, 10, 27) (A, 44, 20) (A, 50, -42) (A, 38, -12) (A, -23, 42) (A, -31, 36) (A, -41, 12) (A, -2, -14) (A, -33, 8) (A, -25, 13) (A, -2, 33) (A, 6, -26) (A, 33, -5) (A, 2, 48) (A, 13, -27) (B, -4, -13) (B, -12, 39) (B, 15, 21) (B, 31, 47) (B, -36, -44) (B, -21, 50) (B, 14, -47) (B, 0, 4) (B, -29, 4) (B, -8, 1) (B, -41, 37) (B, -4, 22) (B, -39, 12) (B, -24, -44) (B, 48, -45) (B, -15, 48) (B, -6, 43) (B, 31, 23) (B, 15, 7) (B, 50, 25) (B, -26, -4) (B, 35, 25) (B, 46, 12) (B, -7, 6) (B, 27, 49) (B, -30, 47) (B, 3, -15) (B, -31, 28) (B, 1, -47) (B, -24, 50) (B, 33, 22) (B, 21, 14) (B, -22, -4) (B, 24, -37) (B, 28, 44) (B, -32, -41) (B, -45, -29) (B, 8, -26) (B, -34, 14) (B, -9, -31) (B, -9, 2) (B, 22, -35) (B, 32, -50) (B, -4, 9) (B, 7, 42) (B, 21, 26) (B, -14, -18) (B, -6, -34) (B, 8, -30) (B, -43, -3) (B, -28, 10) (B, 3, 18) (B, -27, 33) (B, -35, 26) (B, -17, 26) (B, -4, 38) (B, 30, -16) (B, 46, -50) (B, 44, -34) (B, -25, 17) (B, -20, 38) (B, 47, -35) (B, 20, 12) (B, 18, -40) (B, -22, -31) (B, 7, -38) (B, -34, 0) (B, -18, -15) (B, 17, -44) (B, -34, 3) (B, -10, -5) (B, 35, 28) (B, -15, 24) (B, 36, 44) (B, -8, 45) (B, -19, -10) (B, 9, 25) (B, 5, -36) (B, -5, -47) (B, -20, -33) (B, -7, -48) (B, 8, -20) (B, -22, 31) (B, 23, 14) (B, -13, 16) (B, -9, 44) (B, -7, -45) (B, 46, -36) (B, 31, -30) (B, 27, -28) (B, 21, -6) (B, -44, 8) (B, 3, -38) (B, -12, -30) (B, 13, -30) (B, 39, 21) (B, 39, -26) (B, 46, -8) (B, 32, -10) (B, 38, 9) (B, -29, -49) (B, 2, 13) (B, -17, 4) (B, 7, 5) (B, 30, -26) (B, 47, -1) (B, -37, -39) (B, 45, -39) (B, -25, 6) (B, 8, 17) (B, -45, -28) (B, 49, -32) (B, 46, 8) (B, 0, -13) (B, 40, -6) (B, -2, 27) (B, 30, -39) (B, -5, 37) (B, 40, -2) (B, -4, -3) (B, 2, 19) (B, -13, 25) (B, -26, -37) (B, -27, -31) (B, -30, -11) (B, -10, 8) (B, 8, -13) (B, -40, 38) (B, -50, 10) (B, 44, 21) (B, -20, -28) (B, -49, -29) (B, 42, 10) (B, 16, 24) (B, -18, -23) (B, 35, -3) (B, 9, -27) (B, 21, -23) (B, -30, -13) (B, -22, 22) (B, 13, 17) (B, 24, -41) (B, 24, 15) (B, 15, -49) (B, -11, -6) (B, 12, 1) (B, 17, 11) (B, -37, -15) (B, -35, -49) (B, -17, 44) (B, 3, 23) (B, -42, -44) (B, 21, -13) (B, -15, 0) (B, 23, 27) (B, 14, 18) (B, 4, 49) (B, -10, -47) (B, -17, 26) (B, 2, -15) (B, 23, -10) (B, -33, 41) (B, -47, 23) (B, 24, -27) (B, -40, -30) (B, 6, -34) (B, -49, 29) (B, 4, 44) (B, -34, -48) (B, -36, 25) (B, 24, -12) (B, 14, -36) (B, 34, 21) (B, -21, -47) (B, 5, 21) (B, -49, -6) (B, 8, -34) (B, 28, -2) (B, 16, 13) (B, -29, 3) (B, 14, 29) (B, -29, -50) (B, -10, 27) (B, -5, -14) (B, -4, 16) (B, 16, 40) (B, 26, 20) (B, 30, -6) (B, -41, -44) (B, 17, 21) (B, 44, 44) (B, 26, 29) (B, -10, 9) (B, -30, -29) (B, 16, 11) (B, 37, -20) (B, 9, -16) (B, 33, 30) (B, 3, -18) (B, 16, 9) (B, 39, 34) (B, 43, 50) (B, -14, 11) (B, 9, 11) (B, -48, -50) (B, -49, 36) (B, -14, 48) (B, 37, -28) (B, 17, 18) (B, -37, -49) (B, -25, -13) (B, 34, 50) (B, -6, -49) (B, 38, 38) (B, -6, -37) (B, -11, -7) (B, -32, 50) (B, 47, -15) (B, 34, 5) (B, -30, -42) (B, 11, -20) (B, -2, -35) (B, 14, 24) (B, -5, -23) (B, 16, 41) (B, -34, 49) (B, 13, 47) (B, -26, -27) (B, -2, -2) (B, 1, -3) (B, 21, 19) (B, 18, 46) (B, -31, -9) (B, -25, 16) (B, -21, -6) (B, 27, 18) (B, -12, 24) (B, -33, -34) (B, 9, -24) (B, 44, 35) (B, -2, 5) (B, 34, -15) (B, 45, 13) (B, -8, -50) (B, -13, -11) (B, 22, -14) (B, -22, 15) (B, 35, -21) (B, 37, 50) (B, -43, 13); TESTING DATA: (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50) (50, 50)",
    "TRAIN: (A, 3, 10) (A, 3, 0) (A, 3, -10) (B, -10, 10) (B, -10, 0) (B, -10, -10) (B, 2, 1); TEST: (0, 0) (1,1) (3, 4) (2, 6) (0, 4) (2, 1) (6, 3) (2, 9) (8, 6) (4, 3)",
    "TRAIN: (A, 1, 0)  (A, 2, 0)  (A, 3, 0)  (A, 4, 0)  (A, 5, 0)  (A, 6, 0)  (A, 7, 0)  (A, 8, 0)  (B, 10, 0) (A, 5, 10); TEST: (0, 0)",
    "TRAINING DATA: (A, 9, 10) (A, 8, 10) (A, 7, 10) (A, 6, 10) (A, 5, 10) (A, 4, 10) (A, 3, 10) (A, 2, 10) (A, 1, 10) (A, 0, 10) (A, -1, 10) (A, -2, 10) (A, -3, 10) (A, -4, 10) (A, -5, 10) (A, -6, 10) (A, -7, 10) (A, -8, 10) (A, -9, 10) (A, 8, 9) (A, 7, 9) (A, 6, 9) (A, 5, 9) (A, 4, 9) (A, 3, 9) (A, 2, 9) (A, 1, 9) (A, 0, 9) (A, -1, 9) (A, -2, 9) (A, -3, 9) (A, -4, 9) (A, -5, 9) (A, -6, 9) (A, -7, 9) (A, -8, 9) (A, -9, 9) (A, 7, 8) (A, 6, 8) (A, 5, 8) (A, 4, 8) (A, 3, 8) (A, 2, 8) (A, 1, 8) (A, 0, 8) (A, -1, 8) (A, -2, 8) (A, -3, 8) (A, -4, 8) (A, -5, 8) (A, -6, 8) (A, -7, 8) (A, -8, 8) (A, -9, 8) (A, 6, 7) (A, 5, 7) (A, 4, 7) (A, 3, 7) (A, 2, 7) (A, 1, 7) (A, 0, 7) (A, -1, 7) (A, -2, 7) (A, -3, 7) (A, -4, 7) (A, -5, 7) (A, -6, 7) (A, -7, 7) (A, -8, 7) (A, -9, 7) (A, 5, 6) (A, 4, 6) (A, 3, 6) (A, 2, 6) (A, 1, 6) (A, 0, 6) (A, -1, 6) (A, -2, 6) (A, -3, 6) (A, -4, 6) (A, -5, 6) (A, -6, 6) (A, -7, 6) (A, -8, 6) (A, -9, 6) (A, 4, 5) (A, 3, 5) (A, 2, 5) (A, 1, 5) (A, 0, 5) (A, -1, 5) (A, -2, 5) (A, -3, 5) (A, -4, 5) (A, -5, 5) (A, -6, 5) (A, -7, 5) (A, -8, 5) (A, -9, 5) (A, 3, 4) (A, 2, 4) (A, 1, 4) (A, 0, 4) (A, -1, 4) (A, -2, 4) (A, -3, 4) (A, -4, 4) (A, -5, 4) (A, -6, 4) (A, -7, 4) (A, -8, 4) (A, -9, 4) (A, 2, 3) (A, 1, 3) (A, 0, 3) (A, -1, 3) (A, -2, 3) (A, -3, 3) (A, -4, 3) (A, -5, 3) (A, -6, 3) (A, -7, 3) (A, -8, 3) (A, -9, 3) (A, 1, 2) (A, 0, 2) (A, -1, 2) (A, -2, 2) (A, -3, 2) (A, -4, 2) (A, -5, 2) (A, -6, 2) (A, -7, 2) (A, -8, 2) (A, -9, 2) (A, 0, 1) (A, -1, 1) (A, -2, 1) (A, -3, 1) (A, -4, 1) (A, -5, 1) (A, -6, 1) (A, -7, 1) (A, -8, 1) (A, -9, 1) (A, -1, 0) (A, -2, 0) (A, -3, 0) (A, -4, 0) (A, -5, 0) (A, -6, 0) (A, -7, 0) (A, -8, 0) (A, -9, 0) (A, -2, -1) (A, -3, -1) (A, -4, -1) (A, -5, -1) (A, -6, -1) (A, -7, -1) (A, -8, -1) (A, -9, -1) (A, -3, -2) (A, -4, -2) (A, -5, -2) (A, -6, -2) (A, -7, -2) (A, -8, -2) (A, -9, -2) (A, -4, -3) (A, -5, -3) (A, -6, -3) (A, -7, -3) (A, -8, -3) (A, -9, -3) (A, -5, -4) (A, -6, -4) (A, -7, -4) (A, -8, -4) (A, -9, -4) (A, -6, -5) (A, -7, -5) (A, -8, -5) (A, -9, -5) (A, -7, -6) (A, -8, -6) (A, -9, -6) (A, -8, -7) (A, -9, -7) (A, -9, -8) (B, 10, 9) (B, 9, 8) (B, 10, 8) (B, 8, 7) (B, 9, 7) (B, 10, 7) (B, 7, 6) (B, 8, 6) (B, 9, 6) (B, 10, 6) (B, 6, 5) (B, 7, 5) (B, 8, 5) (B, 9, 5) (B, 10, 5) (B, 5, 4) (B, 6, 4) (B, 7, 4) (B, 8, 4) (B, 9, 4) (B, 10, 4) (B, 4, 3) (B, 5, 3) (B, 6, 3) (B, 7, 3) (B, 8, 3) (B, 9, 3) (B, 10, 3) (B, 3, 2) (B, 4, 2) (B, 5, 2) (B, 6, 2) (B, 7, 2) (B, 8, 2) (B, 9, 2) (B, 10, 2) (B, 2, 1) (B, 3, 1) (B, 4, 1) (B, 5, 1) (B, 6, 1) (B, 7, 1) (B, 8, 1) (B, 9, 1) (B, 10, 1) (B, 1, 0) (B, 2, 0) (B, 3, 0) (B, 4, 0) (B, 5, 0) (B, 6, 0) (B, 7, 0) (B, 8, 0) (B, 9, 0) (B, 10, 0) (B, 0, -1) (B, 1, -1) (B, 2, -1) (B, 3, -1) (B, 4, -1) (B, 5, -1) (B, 6, -1) (B, 7, -1) (B, 8, -1) (B, 9, -1) (B, 10, -1) (B, -1, -2) (B, 0, -2) (B, 1, -2) (B, 2, -2) (B, 3, -2) (B, 4, -2) (B, 5, -2) (B, 6, -2) (B, 7, -2) (B, 8, -2) (B, 9, -2) (B, 10, -2) (B, -2, -3) (B, -1, -3) (B, 0, -3) (B, 1, -3) (B, 2, -3) (B, 3, -3) (B, 4, -3) (B, 5, -3) (B, 6, -3) (B, 7, -3) (B, 8, -3) (B, 9, -3) (B, 10, -3) (B, -3, -4) (B, -2, -4) (B, -1, -4) (B, 0, -4) (B, 1, -4) (B, 2, -4) (B, 3, -4) (B, 4, -4) (B, 5, -4) (B, 6, -4) (B, 7, -4) (B, 8, -4) (B, 9, -4) (B, 10, -4) (B, -4, -5) (B, -3, -5) (B, -2, -5) (B, -1, -5) (B, 0, -5) (B, 1, -5) (B, 2, -5) (B, 3, -5) (B, 4, -5) (B, 5, -5) (B, 6, -5) (B, 7, -5) (B, 8, -5) (B, 9, -5) (B, 10, -5) (B, -5, -6) (B, -4, -6) (B, -3, -6) (B, -2, -6) (B, -1, -6) (B, 0, -6) (B, 1, -6) (B, 2, -6) (B, 3, -6) (B, 4, -6) (B, 5, -6) (B, 6, -6) (B, 7, -6) (B, 8, -6) (B, 9, -6) (B, 10, -6) (B, -6, -7) (B, -5, -7) (B, -4, -7) (B, -3, -7) (B, -2, -7) (B, -1, -7) (B, 0, -7) (B, 1, -7) (B, 2, -7) (B, 3, -7) (B, 4, -7) (B, 5, -7) (B, 6, -7) (B, 7, -7) (B, 8, -7) (B, 9, -7) (B, 10, -7) (B, -7, -8) (B, -6, -8) (B, -5, -8) (B, -4, -8) (B, -3, -8) (B, -2, -8) (B, -1, -8) (B, 0, -8) (B, 1, -8) (B, 2, -8) (B, 3, -8) (B, 4, -8) (B, 5, -8) (B, 6, -8) (B, 7, -8) (B, 8, -8) (B, 9, -8) (B, 10, -8) (B, -8, -9) (B, -7, -9) (B, -6, -9) (B, -5, -9) (B, -4, -9) (B, -3, -9) (B, -2, -9) (B, -1, -9) (B, 0, -9) (B, 1, -9) (B, 2, -9) (B, 3, -9) (B, 4, -9) (B, 5, -9) (B, 6, -9) (B, 7, -9) (B, 8, -9) (B, 9, -9) (B, 10, -9); TESTING DATA: (-41, -38) (19, 39) (16, 37) (-18, 43) (-12, -14) (-21, 2) (46, -6) (-25, -13) (-39, 12) (39, 49) (-44, 6) (3, 29) (16, 5) (-40, -11) (-5, -48) (8, -36) (40, -27) (36, 3) (5, 13) (19, -17) (14, 11) (-34, 9) (19, -40) (23, -35) (30, 26) (-13, -43) (-48, -25) (-39, 0) (35, 45) (33, 16)(35, -31) (27, -48) (49, -1) (-27, 2) (25, 9) (-10, -35) (7, 40) (-40, -21) (-10, 41) (43, 8) (-18, -8) (-36, 44) (-29, -24) (-19, 46) (21, 32) (46, 6) (-40, -13) (4, 6) (32, -33) (11, 21) (10, -42) (-41, 10) (4, 9) (47, -13) (26, 15) (22, -21) (44, 5) (7, 31) (24, -3) (27, -29)(42, 15) (4, -16) (-45, 21) (-39, -38) (39, 26) (-6, 10) (-39, -26) (2, -10) (-30, -22) (-33, 32) (-7, 38) (-26, 19) (-39, 47) (-46, 44) (-25, 43) (-15, 26) (-8, 49) (34, -32) (48, 27) (18, -49) (34, -7) (0, -10) (-24, 27) (-26, -16) (8, -10) (18, -30) (-39, 18) (-28, -8) (31, -30) (-18, 8)"
];
const INPUT_DATA_FORMAT_REGEX = /^ *TRAIN(ING)? *(DATA)? *: *((\( *[AB] *, *-?\d+ *, *-?\d+ *\) *)+) *; *TEST(ING)? *(DATA)? *: *((\( *-?\d+ *, *-?\d+ *\) *)+) *$/g;

let canvasController = undefined;
let PLA = undefined;
let displayedAxisLimit = undefined;
let displayedAxisLimitNeg = undefined;

function setupPage() {
    canvasController = new CanvasController(document.getElementById("pla-simulator"));
    drawBasePLASimulatorElements();

    changeActionButtonText("Run Training Phase");
    disableRunPLASimulatorButton();
    fillDataInputWrapper('preset');
}

function resize() {
    canvasController.resize(canvasController.canvas.parentElement.offsetWidth, canvasController.canvas.parentElement.offsetWidth);

    drawBasePLASimulatorElements();
    displayAxisLimits();
    if (PLA) {
        if (PLA.hypothesisLineAsStandardFormAlgebraicString) {
            PLA.drawHypothesisLine();
        }
        PLA.plotTrainingTwoDimensionalFeatureVectors();
        PLA.plotClassifiedTestingTwoDimensionalFeatureVectors();
    }
}

function drawBasePLASimulatorElements() {
    drawPLASimulatorAxes();
    displayAxisLimits();
}

function drawPLASimulatorAxes() {
    canvasController.setStrokeStyle("#aaaaaa");

    canvasController.drawLineViaFromTo(canvasController.leftMiddleCoordinate, canvasController.rightMiddleCoordinate);
    canvasController.drawLineViaFromTo(canvasController.centerTopCoordinate, canvasController.centerBottomCoordinate);
}

function enableRunPLASimulatorButton() {
    $('#pla-simulator-run-button').prop(
        'disabled',
        () => {
            return false;
        }
    );
}

function disableRunPLASimulatorButton() {
    $('#pla-simulator-run-button').prop(
        'disabled',
        () => {
            return true;
        }
    );
}

function fillDataInputWrapper(selectedInputMethod) {
    let dataInputWrapper = $("#data-input-wrapper");

    switch (selectedInputMethod) {
        case "preset":
            dataInputWrapper.html(getPresetHTML());
            break;
        case "manual":
            dataInputWrapper.html(getManualHTML());
            break;
        case "file":
            dataInputWrapper.html(getFileHTML());
            break;
        case "random":
            dataInputWrapper.html(getRandomHTML());
            break;
        default:
            throw new Error("Unrecognized input method selected: \"" + selectedInputMethod + "\".");
            break;
    }
}

function getPresetHTML() {
    return `
        <form id="preset-input-selection-form" class="bordered center-me" style="margin: 10px;">
            <input class="preset-input" name="preset-input" value="0" type="radio" checked="checked"/>Submission Data Set<br/>
            <input class="preset-input" name="preset-input" value="1" type="radio"/>Much Larger Data Set<br/>
            <input class="preset-input" name="preset-input" value="2" type="radio"/>Not Linearly Separable<br/>
            <input class="preset-input" name="preset-input" value="3" type="radio"/>Wobbly<br/>
            <input class="preset-input" name="preset-input" value="4" type="radio"/>Tricky<br/>
            <input class="preset-input" name="preset-input" value="5" type="radio"/>Diagonal<br/>
        </form>
    `;
}

function getManualHTML() {
    return `<textarea id="manual-data-input center-me" style="width: 90%; margin: 20px;"></textarea>`;
}

function getFileHTML() {
    return `<div class="center-me"><input id="file-data-input" type="file" accept=".txt" class="center-me" style="margin: 10px;"/></div>`;
}

function getRandomHTML() {
    return `
        <div class=" center-me" style="margin: 10px;">
            <label>Quantity A Vectors</label>
            <input id="quantity-a-vectors" type="text" value="25" style="width: 30px;"><br/>
            <label>Quantity B Vectors</label>
            <input id="quantity-b-vectors" type="text" value="25" style="width: 30px;"><br/>
            <label>Quantity Test Vectors</label>
            <input id="quantity-test-vectors" type="text" value="30" style="width: 30px;"><br/>
            
            <label for="x-range">X Range</label><br/>
            From: <input type="text" id="x-range-lower" name="x-range" value="-50" style="width: 30px;"/>
            To: <input type="text" id="x-range-upper" name="x-range" value="50" style="width: 30px;"/><br/>
            <label for="y-range">Y Range</label><br/>
            From: <input type="text" id="y-range-lower" name="y-range" value="-50" style="width: 30px;"/>
            To: <input type="text" id="y-range-upper" name="y-range" value="50" style="width: 30px;"/><br/>
            
            <input type="checkbox" id="linearly-separable" name="linearly-separable" checked="checked" onclick="toggleLinearlySeparable()"/><b> Linearly Separable</b><br/>
            <label for="linearly-separable-along">Along Line (slope intercept form)</label>
            y=<input type="text" id="m" name="linearly-separable-along" value="1" style="width: 30px;"/>x+<input type="text" id="b" name="linearly-separable-along" value="0" style="width: 30px;"/>
        </div>    
`;
}

function randomFloat(lowerBound, upperBound) {
    return lowerBound + (Math.random() * (upperBound - lowerBound));
}

function randomInteger(lowerBound, upperBound) {
    if (lowerBound >= 0) { //If only positive values...
        return Math.floor(lowerBound + (Math.random() * (upperBound - lowerBound + 1)));
    } else {
        let positiveCandidate = Math.floor(Math.random() * (upperBound + 1)); //Get a potential random number in the positive range.
        let negativeCandidate = Math.floor(1 + Math.random() * ((lowerBound * -1))) * -1; //Get a potential random number in the negative range.

        let quantityPositiveValues = upperBound;
        let quantityNegativeValues = lowerBound * -1;
        let totalValues = quantityPositiveValues + quantityNegativeValues;

        if (quantityPositiveValues === 0) {
            return negativeCandidate;
        } else if (quantityNegativeValues === 0) {
            return positiveCandidate;
        } else {
            let ratio = quantityPositiveValues / totalValues;

            if (Math.random() > ratio) { //This makes it so we should still get random numbers of each class (positive or negative) proportional to how many are actually there. I.e. "randomInteger(-10, 100)" should output positive numbers 10 times as often as negative numbers.
                return positiveCandidate;
            } else {
                return negativeCandidate;
            }
        }
    }
}

function loadInputDataIntoPLASimulator() {
    retrieveInputDataFromInputMethod().then(
        (fetchedData) => {
            if (validInputData(fetchedData)) {
                canvasController.clear();
                drawBasePLASimulatorElements();

                let inputData = parseInputData(fetchedData);
                let weights;
                if ($("#randomize-initial-weights").prop('checked')) {
                    weights = {
                        weightX: randomFloat(0, 1),
                        weightY: randomFloat(0, 1),
                        weightBias: randomFloat(0, 1)
                    };
                } else {
                    weights = {
                        weightX: parseFloat($('#weight-x').val()),
                        weightY: parseFloat($('#weight-y').val()),
                        weightBias: parseFloat($('#weight-bias').val())
                    };
                }
                let options = {
                    maximumIterations: parseFloat($('#maximum-iterations').val()),
                    learningRate: parseFloat($('#learning-rate').val()),
                    theta: parseFloat($('#theta').val()),
                    weights: weights,
                    advanceRate: parseFloat($('#speed').val()),
                    classificationOne: new Classification("A", $('#class-A-symbol').val(), $('#class-A-color').val()),
                    classificationTwo: new Classification("B", $('#class-B-symbol').val(), $('#class-B-color').val()),
                    onAdvanceTraining: onAdvanceTraining.bind(this),
                    onAdvanceTesting: onAdvanceTesting.bind(this),
                    onComplete: onComplete.bind(this),
                    onStatusChange: onStatusChange.bind(this)
                };

                getAxisLimits(inputData.trainingData, inputData.testingData);
                displayAxisLimits();

                if (PLA) {
                    clearInterval(PLA.interval);
                }

                PLA = new OfflineTwoDimensionalPerceptronLearningAlgorithmForBinaryClassification(canvasController, inputData, options);

                PLA.hypothesisLineAsStandardFormAlgebraicString = "undefined";

                onAdvanceTraining();

                enableRunPLASimulatorButton();
            } else {
                alert("Invalid data! Make sure your data resembled the format \"TRAINING DATA: ([A or B], [int], [int]) ([A or B], [int], [int]); TESTING DATA: ([int], [int]) ([int], [int])\".");
                disableRunPLASimulatorButton();
            }
        }
    ).catch(
        (error) => {
            console.error(error);
            throw new Error("Something went wrong while retrieving your data, please try again!");
        }
    );
}

function toggleInitialWeightInputs() {
    $("#weight-x").prop(
        'disabled',
        (index, value) => {
            return !value;
        }
    );

    $("#weight-y").prop(
        'disabled',
        (index, value) => {
            return !value;
        }
    );

    $("#weight-bias").prop(
        'disabled',
        (index, value) => {
            return !value;
        }
    );
}

function toggleLinearlySeparable() {
    $("#m").prop(
        'disabled',
        (index, value) => {
            return !value;
        }
    );

    $("#b").prop(
        'disabled',
        (index, value) => {
            return !value;
        }
    );
}

function onAdvanceTraining() {
    $("#training-iteration-detail-value").html(PLA.trainingIteration);
    $("#bounding-equation-detail-value").html(PLA.hypothesisLineAsStandardFormAlgebraicString);
    $("#testing-iteration-detail-value").html(PLA.testingIteration);
    $("#weight-x-detail-value").html(parseFloat(PLA.twoDimensionalFeatureWeights.weightX).toFixed(2));
    $("#weight-y-detail-value").html(parseFloat(PLA.twoDimensionalFeatureWeights.weightY).toFixed(2));
    $("#weight-bias-detail-value").html(parseFloat(PLA.twoDimensionalFeatureWeights.weightBias).toFixed(2));
    $("#class-A-vectors-detail-value").html(PLA.getClassAFeatures());
    $("#class-B-vectors-detail-value").html(PLA.getClassBFeatures());
    $("#classified-vectors-detail-value").html(PLA.getClassifiedTestingFeatures() + " of " + PLA.testingTwoDimensionalFeatureVectors.length);
}

function onAdvanceTesting() {
    $("#training-iteration-detail-value").html(PLA.trainingIteration);
    $("#bounding-equation-detail-value").html(PLA.hypothesisLineAsStandardFormAlgebraicString);
    $("#testing-iteration-detail-value").html(PLA.testingIteration);
    $("#weight-x-detail-value").html(parseFloat(PLA.twoDimensionalFeatureWeights.weightX).toFixed(2));
    $("#weight-y-detail-value").html(parseFloat(PLA.twoDimensionalFeatureWeights.weightY).toFixed(2));
    $("#weight-bias-detail-value").html(parseFloat(PLA.twoDimensionalFeatureWeights.weightBias).toFixed(2));
    $("#class-A-vectors-detail-value").html(PLA.getClassAFeatures());
    $("#class-B-vectors-detail-value").html(PLA.getClassBFeatures());
    $("#classified-vectors-detail-value").html(PLA.getClassifiedTestingFeatures() + " of " + PLA.testingTwoDimensionalFeatureVectors.length);
}

function onComplete() {
    let newRow = `
        <tr>
            <td>` + PLA.trainingIteration + `</td>
            <td>` + PLA.testingIteration + `</td>
            <td>` + PLA.hypothesisLineAsStandardFormAlgebraicString + `</td>
            <td>` + PLA.getClassAFeatures() + `</td>
            <td>` + PLA.getClassBFeatures() + `</td>
            <td>X: ` + PLA.weights.weightX.toFixed(2) + `, Y: ` + PLA.weights.weightY.toFixed(2) + `, Bias: ` + PLA.weights.weightBias.toFixed(2) + `</td>
            <td><div style="font-size: 8px; max-height: 70px; overflow-y: scroll">TRAINING DATA: ` + PLA.inputData.trainingData.map(
        (trainingDatum) => {
            return "(" + trainingDatum[0] + ", " + trainingDatum[1] + ", " + trainingDatum[2] + ")";
        }
    ).join(" ") + `; TESTING DATA: ` + PLA.inputData.testingData.map(
        (testingDatum) => {
            return "(" + testingDatum[1] + ", " + testingDatum[2] + ")";
        }
    ).join(" ") + `</div></td>
        </tr>
    `;

    $("#history-table").html($("#history-table").html() + newRow);
}

function onStatusChange(newStatus) {
    changeStatusDisplayText(newStatus);
    switch (newStatus) {
        case "Not Started":
            changeActionButtonText("Run Training Phase");
            enableRunPLASimulatorButton();
            break;
        case "Training":
            disableRunPLASimulatorButton();
            break;
        case "Testing":
            disableRunPLASimulatorButton();
            break;
        case "Finished Training":
            enableRunPLASimulatorButton();
            break;
        case "Finished Testing":
            changeActionButtonText("Reset this simulation");
            enableRunPLASimulatorButton();
            break;
        case "Error - Training":
        case "Error - Testing":
            disableRunPLASimulatorButton();
            break;
        default:
            disableRunPLASimulatorButton();
            throw new Error("PLA Simulator status changed to unrecognized status \"" + newStatus + "\".");
    }
}

function retrieveInputDataFromInputMethod() {
    return new Promise(
        (resolve, reject) => {
            let selectedInputMethod = $('input[name=data-input-method]:checked', '#data-input-selection-form').val();

            switch (selectedInputMethod) {
                case "preset":
                    resolve(getSelectedDataInputPresetContents());
                    break;
                case "manual":
                    resolve(getManualDataInputContents());
                    break;
                case "file":
                    getDataInputFileContents().then(
                        (contents) => {
                            resolve(contents);
                        }
                    ).catch(
                        (error) => {
                            reject(error);
                        }
                    );
                    break;
                case "random":
                    resolve(getRandomDataInput());
                    break;
                default:
                    reject("Unknown data input method selected, \"" + selectedInputMethod + "\"");
                    break;
            }
        }
    );
}

function validInputData(inputData) {
    return resetRegularExpression(INPUT_DATA_FORMAT_REGEX).exec(inputData);
}

function getSelectedDataInputPresetContents() {
    return PRESET_DATA[getSelectedDataInputPresetIndex()];
}

function getSelectedDataInputPresetIndex() {
    return parseInt($('input[name=preset-input]:checked', '#preset-input-selection-form').val());
}

function getManualDataInputContents() {
    return $("#manual-data-input").val();
}

function getDataInputFileContents() {
    return new Promise(
        (resolve, reject) => {
            let file = $("#file-data-input")[0].files[0];
            let fr = new FileReader();
            let contents = "";

            fr.onload = () => {
                contents += fr.result;
            };
            fr.onloadend = () => {
                resolve(contents);
            };
            fr.onerror = (error) => {
                reject(error);
            };

            fr.readAsText(file);
        }
    );
}

function getRandomDataInput() {
    let quantityA = $("#quantity-a-vectors").val();
    let quantityB = $("#quantity-b-vectors").val();
    let quantityTest = $("#quantity-test-vectors").val();
    let xRange = {
        lower: parseInt($("#x-range-lower").val()),
        upper: parseInt($("#x-range-upper").val())
    };
    let yRange = {
        lower: parseInt($("#y-range-lower").val()),
        upper: parseInt($("#y-range-upper").val())
    };

    let shouldBeLinearlySeparable = $('input[name="linearly-separable"]').is(':checked');
    let m = $("#m").val();
    let b = $("#b").val();

    let linearlySeperableAlongLineInSlopeInterceptForm = "y=" + m + "x+" + b;

    let dataString = "TRAINING DATA:";

    if (shouldBeLinearlySeparable) {
        let aPoints = [];
        let bPoints = [];

        while (aPoints.length < quantityA && bPoints.length < quantityB) {
            let potentialAPoint = {
                x: randomInteger(xRange.lower, xRange.upper),
                y: randomInteger(yRange.lower, yRange.upper)
            };

            if (pointIsAboveSlopeInterceptFormLine(potentialAPoint, linearlySeperableAlongLineInSlopeInterceptForm)) {
                aPoints.push(potentialAPoint);
            } else {
                bPoints.push(potentialAPoint);
            }
        }

        while (aPoints.length < quantityA) {
            let potentialAPoint = {
                x: randomInteger(xRange.lower, xRange.upper),
                y: randomInteger(yRange.lower, yRange.upper)
            };

            if (pointIsAboveSlopeInterceptFormLine(potentialAPoint, linearlySeperableAlongLineInSlopeInterceptForm)) {
                aPoints.push(potentialAPoint);
            }
        }

        while (bPoints.length < quantityB) {
            let potentialBPoint = {
                x: randomInteger(xRange.lower, xRange.upper),
                y: randomInteger(yRange.lower, yRange.upper)
            };

            if (!pointIsAboveSlopeInterceptFormLine(potentialBPoint, linearlySeperableAlongLineInSlopeInterceptForm)) {
                bPoints.push(potentialBPoint);
            }
        }

        for (let i = 0; i < quantityA; i++) {
            dataString += " (";
            dataString += "A";
            dataString += ", ";
            dataString += aPoints[i].x;
            dataString += ", ";
            dataString += aPoints[i].y;
            dataString += ")"
        }

        for (let i = 0; i < quantityB; i++) {
            dataString += " (";
            dataString += "B";
            dataString += ", ";
            dataString += bPoints[i].x;
            dataString += ", ";
            dataString += bPoints[i].y;
            dataString += ")"
        }
    } else {
        for (let i = 0; i < quantityA; i++) {
            dataString += " (";
            dataString += "A";
            dataString += ", ";
            dataString += randomInteger(xRange.lower, xRange.upper);
            dataString += ", ";
            dataString += randomInteger(yRange.lower, yRange.upper);
            dataString += ")"
        }

        for (let i = 0; i < quantityB; i++) {
            dataString += " (";
            dataString += "B";
            dataString += ", ";
            dataString += randomInteger(xRange.lower, xRange.upper);
            dataString += ", ";
            dataString += randomInteger(yRange.lower, yRange.upper);
            dataString += ")"
        }
    }

    dataString += "; TESTING DATA:";

    for (let i = 0; i < quantityTest; i++) {
        dataString += " (";
        dataString += randomInteger(xRange.lower, xRange.upper);
        dataString += ", ";
        dataString += randomInteger(yRange.lower, yRange.upper);
        dataString += ")"
    }

    return dataString
}

function pointIsAboveSlopeInterceptFormLine(point, slopeInterceptFormLine) {
    let slopeInterceptFormLineWithoutSpaces = slopeInterceptFormLine.replace(/\s+/g, '');
    let regexResult = /^[yY]=(-?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?)[xX]\+(-?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?)$/.exec(slopeInterceptFormLineWithoutSpaces);

    let M = parseFloat(regexResult[1]);
    let B = parseFloat(regexResult[7]);

    let yAtProvidedX = M * point.x + B;

    return point.y > yAtProvidedX;
}

function parseInputData(rawData) {
    let inputData = {
        trainingData: undefined,
        testingData: undefined
    };

    let regexResult = resetRegularExpression(INPUT_DATA_FORMAT_REGEX).exec(rawData);

    let trainingData = regexResult[3].replace(/\s+/g, '').substring(1).slice(0, -1).split(")(").map(
        (trainingDatum) => {
            return trainingDatum.split(",");
        }
    );
    trainingData.forEach(
        (trainingDatum) => {
            trainingDatum[1] = parseFloat(trainingDatum[1]);
            trainingDatum[2] = parseFloat(trainingDatum[2]);
        }
    );

    let testingData = regexResult[7].replace(/\s+/g, '').substring(1).slice(0, -1).split(")(").map(
        (testDatum) => {
            return testDatum.split(",");
        }
    );
    testingData.forEach(
        (testingDatum) => {
            testingDatum[2] = parseFloat(testingDatum[1]);
            testingDatum[1] = parseFloat(testingDatum[0]);
            testingDatum[0] = "";
        }
    );

    inputData.trainingData = trainingData;
    inputData.testingData = testingData;

    return inputData;
}

function getAxisLimits(trainingData, testingData) {
    let maxX = -Infinity;
    let minX = Infinity;
    let maxY = -Infinity;
    let minY = Infinity;

    trainingData.forEach(
        (trainingDatum) => {
            if (trainingDatum[1] > maxX) {
                maxX = trainingDatum[1];
            }
            if (trainingDatum[1] < minX) {
                minX = trainingDatum[1];
            }
            if (trainingDatum[2] > maxY) {
                maxY = trainingDatum[2];
            }
            if (trainingDatum[2] < minY) {
                minY = trainingDatum[2];
            }
        }
    );
    testingData.forEach(
        (testDatum) => {
            if (testDatum[0] > maxX) {
                maxX = testDatum[0];
            }
            if (testDatum[0] < minX) {
                minX = testDatum[0];
            }
            if (testDatum[1] > maxY) {
                maxY = testDatum[1];
            }
            if (testDatum[1] < minY) {
                minY = testDatum[1];
            }
        }
    );

    let axisXLimit;
    let axisXLimitNeg;
    let axisYLimit;
    let axisYLimitNeg;
    if (Math.abs(maxX) >= Math.abs(minX)) {
        axisXLimit = Math.abs(maxX);
    } else {
        axisXLimit = Math.abs(minX);
    }
    axisXLimitNeg = -axisXLimit;

    if (Math.abs(maxY) >= Math.abs(minY)) {
        axisYLimit = Math.abs(maxY);
    } else {
        axisYLimit = Math.abs(minY);
    }
    axisYLimitNeg = -axisYLimit;

    if (axisXLimit >= axisYLimit) {
        displayedAxisLimit = Math.ceil(axisXLimit * 1.1);
        displayedAxisLimitNeg = Math.floor(axisXLimitNeg * 1.1);
    } else {
        displayedAxisLimit = Math.ceil(axisYLimit * 1.1);
        displayedAxisLimitNeg = Math.floor(axisYLimitNeg * 1.1);
    }
}

function displayAxisLimits() {
    if (displayedAxisLimit) {
        canvasController.ctx.font = "14px sans-serif";
        canvasController.setStrokeStyle("#cccccc");

        canvasController.drawTextAt("0", {x: canvasController.canvas.width / 2 + 5, y: canvasController.canvas.height / 2 - 5});
        canvasController.drawTextAt(displayedAxisLimit.toString(), {x: canvasController.canvas.width - 30, y: canvasController.canvas.height / 2 - 5});
        canvasController.drawTextAt(displayedAxisLimitNeg.toString(), {x: 2, y: canvasController.canvas.height / 2 - 5});
        canvasController.drawTextAt(displayedAxisLimit.toString(), {x: canvasController.canvas.width / 2 + 5, y: 14});
        canvasController.drawTextAt(displayedAxisLimitNeg.toString(), {x: canvasController.canvas.width / 2 + 5, y: canvasController.canvas.height - 7});
    }
}

function runPLASimulator() {
    if (PLA) {
        if (PLA.status === "Not Started") {
            canvasController.clear();
            drawBasePLASimulatorElements();
            displayAxisLimits();
            PLA.plotTrainingTwoDimensionalFeatureVectors();

            PLA.runTraining().then(
                () => {
                    console.log("PLA Training Complete. Final equation: \"" + PLA.hypothesisLineAsStandardFormAlgebraicString + "\"");

                    canvasController.clear();
                    drawBasePLASimulatorElements();
                    PLA.plotTrainingTwoDimensionalFeatureVectors();
                    canvasController.setStrokeStyle("#0000ff");
                    canvasController.drawLineViaStandardFormAlgebraicString(PLA.hypothesisLineAsStandardFormAlgebraicString);

                    changeActionButtonText("Run Test Phase");
                }
            ).catch(
                (error) => {
                    console.error(error);
                }
            );
        } else if (PLA.status === "Finished Training") {
            canvasController.clear();
            drawBasePLASimulatorElements();
            displayAxisLimits();
            PLA.drawHypothesisLine();
            PLA.plotTrainingTwoDimensionalFeatureVectors();

            PLA.runTesting().then(
                () => {
                    console.log("PLA Testing Complete.");

                    canvasController.clear();
                    drawBasePLASimulatorElements();
                    PLA.plotTrainingTwoDimensionalFeatureVectors();
                    PLA.plotClassifiedTestingTwoDimensionalFeatureVectors();
                    canvasController.setStrokeStyle("#0000ff");
                    canvasController.drawLineViaStandardFormAlgebraicString(PLA.hypothesisLineAsStandardFormAlgebraicString);
                }
            ).catch(
                (error) => {
                    console.error(error);
                }
            );
        } else if (PLA.status === "Finished Testing") {
            PLA.reset();
            canvasController.clear();
            drawBasePLASimulatorElements();
            displayAxisLimits();
            PLA.plotTrainingTwoDimensionalFeatureVectors();
        }
    }
}

function drawLineFromSlopeString(string) {
    canvasController.drawLineViaSlopeInterceptFormAlgebraicString(string);
}

// I have come to learn that regular expression objects are stateful. This is, apparently, very useful. Not in my eyes, this caused me a lot of grief. This is how I eliminate the state for consistent results.
function resetRegularExpression(regularExpression) {
    regularExpression.lastIndex = 0;
    return regularExpression;
}

function changeActionButtonText(to) {
    $("#pla-simulator-run-button").html(to);
}

function changeStatusDisplayText(to) {
    $("#status-display").html(to);
}