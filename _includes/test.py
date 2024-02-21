# generate 5 dielectric cylinders by looping over some positions
dielectric = td.Medium(permittivity=4.0)
cylinders = []
for position in [-2, -1, 0, 1, 2]:
    cylinder = td.Cylinder(radius=0.5, center=(position, 0, 0), length=10, axis=2)
    structure = td.Structure(geometry=cylinder, medium=dielectric)
    cylinders.append(structure)
