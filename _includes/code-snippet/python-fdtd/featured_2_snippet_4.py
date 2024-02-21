
# interpolate the Ex field component at a specific point and frequency
Ex_at_origin = data['field'].Ex.interp(x=0, y=0, z=0, f=2e14)
