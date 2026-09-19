import React, { useState } from 'react';
import { projects } from '../data/portfolio';
import { 
  ShieldAlert, Activity, AlertTriangle, CheckCircle, Terminal, 
  FileText, Cpu, Radio, ChevronRight, Layers, Bug, Sparkles 
} from 'lucide-react';

export default function ProjectShowcase() {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);
  const [summarizerTab, setSummarizerTab] = useState('summary'); // 'summary' or 'raw'
  const [temperature, setTemperature] = useState(34);
  const [humidity, setHumidity] = useState(68);

  const activeProject = projects.find((p) => p.id === selectedProjectId) || projects[0];
  const isAlertThreshold = temperature > 42 || humidity > 80;

  return (
    <section id="project" className="py-24 relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5E0E]" />
            <span>06 // Engineering Projects</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Featured <span className="text-[#FF5E0E]">Projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl">
            Practical security research and capstone engineering combining cyber defense, intelligent report summarization, and embedded IoT systems.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {projects.map((proj) => {
            const isSelected = proj.id === selectedProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-mono text-xs transition-all duration-300 interactive-element ${
                  isSelected
                    ? 'bg-[#FF5E0E] text-black font-bold shadow-[0_0_25px_rgba(255,94,14,0.35)] -translate-y-0.5'
                    : 'glass-panel text-gray-300 hover:text-white hover:border-white/20'
                }`}
              >
                {proj.id === 'malware-summarizer' ? (
                  <ShieldAlert className="w-4 h-4" />
                ) : (
                  <Radio className="w-4 h-4" />
                )}
                <span>{proj.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isSelected ? 'bg-black/20 text-black' : 'bg-white/10 text-[#FF9436]'
                }`}>
                  {proj.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Project Card Body */}
        <div className="p-6 sm:p-10 rounded-2xl glass-panel border border-[#FF5E0E]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5E0E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Project Architecture & Deep Dive (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="px-3 py-1 rounded-md bg-[#FF5E0E]/15 border border-[#FF5E0E]/30 text-[#FF9436] font-mono text-xs font-semibold">
                  {activeProject.category}
                </span>
                <span className="font-mono text-xs text-gray-400">
                  {activeProject.period}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-4xl text-white mb-4 leading-tight">
                {activeProject.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 font-light">
                {activeProject.summary}
              </p>

              {/* Detailed Technical Highlights */}
              <div className="space-y-2.5 mb-8">
                {activeProject.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E0E] mt-2 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Workflow Pipeline */}
              <div className="mb-8">
                <div className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-3">
                  SYSTEM ARCHITECTURAL PIPELINE
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                  {activeProject.workflowSteps.map((step) => (
                    <div
                      key={step.step}
                      className="p-2.5 rounded-lg bg-black/40 border border-white/10 flex flex-col justify-between"
                    >
                      <div className="font-mono text-[10px] text-[#FF5E0E] font-bold">
                        {step.step}
                      </div>
                      <div className="font-display font-semibold text-xs text-white mt-1">
                        {step.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">
                  TECHNOLOGIES & TOOLS
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 font-mono text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Dynamic Interactive Simulation Widget (5 Cols) */}
            <div className="lg:col-span-5">
              
              {/* IF PROJECT IS: Intelligent Malware Report Summarizer */}
              {activeProject.id === 'malware-summarizer' && (
                <div className="p-6 rounded-xl bg-black/80 border border-white/15 relative shadow-2xl">
                  {/* Console Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 font-mono text-xs">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <Bug className="w-4 h-4 text-[#FF5E0E]" />
                      <span>MALWARE REPORT ANALYZER</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ANALYZER ONLINE
                    </span>
                  </div>

                  {/* Mode Toggles */}
                  <div className="flex gap-2 mb-4">
                    <button
                      onClick={() => setSummarizerTab('summary')}
                      className={`flex-1 py-1.5 px-3 rounded-lg font-mono text-[11px] transition-all ${
                        summarizerTab === 'summary'
                          ? 'bg-[#FF5E0E] text-black font-bold shadow-md'
                          : 'bg-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      AI Executive Summary
                    </button>
                    <button
                      onClick={() => setSummarizerTab('raw')}
                      className={`flex-1 py-1.5 px-3 rounded-lg font-mono text-[11px] transition-all ${
                        summarizerTab === 'raw'
                          ? 'bg-[#FF5E0E] text-black font-bold shadow-md'
                          : 'bg-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      Raw Sandbox Telemetry
                    </button>
                  </div>

                  {/* View: Generated AI Summary */}
                  {summarizerTab === 'summary' ? (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-red-950/30 border border-red-500/30">
                        <div className="flex justify-between items-center text-red-400 font-bold mb-1">
                          <span>THREAT SCORE: 9.4 / 10</span>
                          <span className="text-[10px] bg-red-500/20 px-2 py-0.5 rounded text-red-300">CRITICAL</span>
                        </div>
                        <div className="text-gray-300 text-[11px]">
                          <strong>Classification:</strong> InfoStealer / Dynamic Injection Payload
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-black/60 border border-white/10 space-y-2">
                        <div className="text-[#FF7A29] font-bold text-[11px]">
                          IDENTIFIED MITRE ATT&CK TECHNIQUES:
                        </div>
                        <ul className="text-[11px] text-gray-300 space-y-1 pl-1">
                          <li>• <strong className="text-white">T1055</strong> — Process Injection (VirtualAllocEx, WriteProcessMemory)</li>
                          <li>• <strong className="text-white">T1547.001</strong> — Registry Run Keys Persistence</li>
                          <li>• <strong className="text-white">T1071.001</strong> — C2 Beaconing via Port 8443</li>
                        </ul>
                      </div>

                      <div className="p-3 rounded-lg bg-emerald-950/25 border border-emerald-500/30 text-emerald-300 text-[11px] space-y-1">
                        <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5" />
                          ACTIONABLE REMEDIATION PLAN:
                        </div>
                        <div>1. Isolate endpoint 192.168.1.105 from LAN immediately.</div>
                        <div>2. Block egress traffic to C2 IP 194.26.29.13.</div>
                        <div>3. Terminate hijacked child svchost.exe PID 4128.</div>
                      </div>
                    </div>
                  ) : (
                    /* View: Raw Telemetry Stream */
                    <div className="p-3.5 rounded-lg bg-[#040508] border border-white/10 font-mono text-[11px] text-gray-300 space-y-1 max-h-64 overflow-y-auto">
                      <div className="text-gray-500 text-[10px] mb-1"># RAW CAPE/CUCKOO EXECUTION TRACE</div>
                      <div className="text-yellow-400">&gt; NtCreateProcess: "sample_dropper.exe" (PID: 3820)</div>
                      <div className="text-gray-400">&gt; Kernel32.VirtualAllocEx(hProcess=0x44, size=0x2000, PAGE_EXECUTE_READWRITE)</div>
                      <div className="text-red-400">&gt; WriteProcessMemory: injecting shellcode into PID 4128 (svchost.exe)</div>
                      <div className="text-gray-400">&gt; RegSetValueEx: HKLM\Software\Microsoft\Windows\CurrentVersion\Run\Updater</div>
                      <div className="text-cyan-400">&gt; Socket.Connect: 194.26.29.13:8443 (TLS handshake initiated)</div>
                      <div className="text-emerald-400">&gt; Telemetry parsed by Intelligent Summarizer pipeline.</div>
                    </div>
                  )}

                  <div className="mt-4 text-[10px] font-mono text-gray-400 text-center">
                    Simulates automated parsing of multi-stage raw malware reports into structured executive intelligence.
                  </div>
                </div>
              )}

              {/* IF PROJECT IS: Weather Monitoring System */}
              {activeProject.id === 'weather-sms' && (
                <div className="p-6 rounded-xl bg-black/80 border border-white/15 relative shadow-2xl">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-5 font-mono text-xs text-gray-400">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <Activity className="w-4 h-4 text-[#FF5E0E]" />
                      <span>EMBEDDED HARDWARE SIMULATOR</span>
                    </div>
                    <span className="text-[10px] text-emerald-400">ONLINE</span>
                  </div>

                  {/* Controls */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between font-mono text-xs mb-1">
                        <span className="text-gray-300">Temperature Sensor:</span>
                        <span className={`font-bold ${temperature > 42 ? 'text-red-400' : 'text-[#FF7A29]'}`}>
                          {temperature} °C {temperature > 42 && '(Threshold Exceeded!)'}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="15"
                        max="60"
                        value={temperature}
                        onChange={(e) => setTemperature(Number(e.target.value))}
                        className="w-full accent-[#FF5E0E] bg-white/10 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between font-mono text-xs mb-1">
                        <span className="text-gray-300">Humidity Sensor:</span>
                        <span className={`font-bold ${humidity > 80 ? 'text-red-400' : 'text-[#FF7A29]'}`}>
                          {humidity} % {humidity > 80 && '(Threshold Exceeded!)'}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="99"
                        value={humidity}
                        onChange={(e) => setHumidity(Number(e.target.value))}
                        className="w-full accent-[#FF5E0E] bg-white/10 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Simulated GSM Output Terminal */}
                  <div className="p-3.5 rounded-lg bg-[#040508] border border-white/10 font-mono text-xs space-y-2">
                    <div className="text-gray-500 text-[10px]">
                      # MCU SERIAL CONSOLE [BAUD: 9600]
                    </div>

                    <div className="text-gray-300 text-[11px]">
                      Readings: Temp={temperature}°C | Hum={humidity}%
                    </div>

                    {isAlertThreshold ? (
                      <div className="p-2.5 rounded bg-red-950/40 border border-red-500/40 text-red-300 text-[11px] space-y-1 animate-pulse">
                        <div className="flex items-center gap-1.5 font-bold text-red-400">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          CRITICAL THRESHOLD TRIGGERED!
                        </div>
                        <div>&gt; AT+CMGS="+91XXXXXXXXXX"</div>
                        <div>&gt; ALERT: Weather threshold breach detected!</div>
                        <div className="text-emerald-400 font-bold">&gt; OK: SMS Sent Successfully</div>
                      </div>
                    ) : (
                      <div className="p-2.5 rounded bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-[11px] flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Parameters within safe limits. Standby telemetry.</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 text-[10px] font-mono text-gray-400 text-center">
                    Interactive demonstration of the SMS threshold logic designed for the capstone.
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
