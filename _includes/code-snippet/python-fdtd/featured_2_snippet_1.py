
import tidy3d as td
# try to make a box with negative size in one dimension box = td.Box(size=(-1, 1, 1))
"""
1 validation error for Box
size -> 0
   ensure this value is greater than or equal to 0 (type=value_error.number.not_ge; limit_value=0)
"""
