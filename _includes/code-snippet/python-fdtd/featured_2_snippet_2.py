
import tidy3d as td
# generate 5 dielectric cylinders by looping over some positions
dielectric = td.Medium(permittivity=4.0)
cylinders = []
for position in [-2, -1, 0, 1, 2]:
    cylinder = td.Cylinder(radius=0.5, center=(position, 0, 0), length=10, axis=2)
    structure = td.Structure(geometry=cylinder, medium=dielectric)
    cylinders.append(structure)

point_dipole = td.PointDipole(
    center=(0, 0, 1),
    source_time=td.GaussianPulse(freq0=2e14, fwidth=3e13),
    polarization='Ex',
)

monitor = td.FieldMonitor(
     size=(td.inf, td.inf, 0),
     freqs=[2e14],
     name='field'
)

# combine everything into a single Simulation object
sim = td.Simulation(
    size=(6, 3, 6),
    structures=cylinders,
    sources=[point_dipole],
    monitors=[monitor],
    run_time=1e-12,
)

