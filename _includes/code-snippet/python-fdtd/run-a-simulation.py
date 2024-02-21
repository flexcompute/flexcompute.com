# import the tidy3d package and configure it with your API key
import tidy3d as td
import tidy3d.web as web
import numpy as np

# set up global parameters of simulation ( speed of light / wavelength in micron )
freq0 = td.C_0 / 0.75

# create structure - a box centered at 0, 0, 0 with a size of 1.5 micron and permittivity of 2
square = td.Structure(
    geometry=td.Box(center=(0, 0, 0), size=(1.5, 1.5, 1.5)),
    medium=td.Medium(permittivity=2.0)
)

# create source - A uniform current source with frequency freq0 on the left side of the domain
source = td.UniformCurrentSource(
    center=(-1.5, 0, 0),
    size=(0, 0.4, 0.4),
    source_time=td.GaussianPulse(freq0=freq0, fwidth=freq0 / 10.0),
    polarization="Ey",
)

# create monitor - Measures electromagnetic fields within the entire domain at z=0
monitor = td.FieldMonitor(
    size=(td.inf, td.inf, 0),
    freqs=[freq0],
    name="fields",
    colocate=True,
)

# Initialize simulation - Combine all objects together into a single specification to run
sim = td.Simulation(
    size=(4, 3, 3),
    grid_spec=td.GridSpec.auto(min_steps_per_wvl=25),
    structures=[square],
    sources=[source],
    monitors=[monitor],
    run_time=120/freq0,
)

print(f"simulation grid is shaped {sim.grid.num_cells} for {int(np.prod(sim.grid.num_cells)/1e6)} million cells.")

# run simulation through the cloud and plot the field data computed by the solver and stored in the monitor
data = td.web.run(sim, task_name="quickstart", path="data/data.hdf5", verbose=True)
