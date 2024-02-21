---
category: Simulations
date: '2023-12-03 20:30:52'
enabled: true
id: how-do-i-save-and-load-the-simulationdata-object
title: How do I save and load the SimulationData object?
---

<div><div>Use <code>sim_data.to_file(fname='path/to/file.hdf5')</code>&nbsp;to save a <a target="_blank" rel="noopener" href="https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.SimulationData.html">SimulationData</a> object to a HDF5 file, and <code>sim_data = SimulationData.from_file(fname='path/to/file.hdf5')</code> to load a <a target="_blank" rel="noopener" href="https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.SimulationData.html">SimulationData</a> object from a HDF5 file.</div></div>