// noinspection JSUnusedGlobalSymbols
/**
 * Deutsche Übersetzungsdatei
 * @author erduotong
 */
export default {
    // Titel-Kategorien hier übersetzen
    title: {
        basic: "Grundeinstellungen",
        control_the_inclusion_of_modules_and_packages_in_result: "Steuerung der Aufnahme von Modulen und Paketen im Ergebnis",
        control_the_following_into_imported_modules: "Steuerung der Folgeimporte in Modulen",
        onefile_options: "Onefile-Optionen",
        data_files: "Datendateien",
        metadata_support: "Metadaten-Unterstützung",
        DLL_files: "DLL-Dateien (Dynamische Link-Bibliothek)",
        Linux_specific_controls: "Linux-spezifische Steuerungen",
        control_the_warnings_to_be_given_by_Nuitka: "Steuerung der von Nuitka ausgegebenen Warnungen",
        immediate_execution_after_compilation: "Sofortige Ausführung nach der Kompilierung",
        compilation_choices: "Kompilierungsoptionen",
        output_choices: "Ausgabeoptionen",
        deployment_control: "Bereitstellungssteuerung",
        environment_control: "Umgebungssteuerung",
        debug_features: "Debug-Funktionen",
        nuitka_development_features: "Nuitka-Entwicklungsfunktionen",
        backend_c_compiler_choice: "Auswahl des Backend-C-Compilers",
        cache_control: "Cache-Steuerung",
        PGO_compilation_choices: "PGO (Profilgesteuerte Optimierung) Kompilierungsoptionen",
        tracing_features: "Tracing-Funktionen",
        general_os_controls: "Allgemeine Betriebssystem-Steuerungen",
        windows_specific_controls: "Windows-spezifische Steuerungen",
        macOS_specific_controls: "macOS-spezifische Steuerungen",
        binary_version_information: "Informationen zur Binärversion",
        plugin_control: "Plugin-Steuerung",
        cross_compilation: "Cross-Kompilierung",
        plugin_options_of_anti_bloat: "'Anti-Bloat' Plugin-Optionen (Kategorie: Kern)",
        plugin_options_of_playwright: "'Playwright' Plugin-Optionen",
        plugin_options_of_spacy: "Spacy Plugin-Optionen (Kategorie: Paketunterstützung)",
    },
    // basic
    module: {
        name: "Modul-Modus",
        desc: "Erstellt eine importierbare binäre Erweiterungsmodul-Ausführungsdatei anstelle eines Programms. Standardmäßig deaktiviert.",
    },
    mode: {
        name: "Modus",
        desc: "Der für die Kompilierung zu verwendende Modus",
        elements: {
            accelerated: {
                name: "Beschleunigter Modus",
                desc: "Der beschleunigte Modus wird in Ihrer Python-Installation ausgeführt und ist von dieser abhängig. Dies ist der Standardmodus.",
            },
            standalone: {
                name: "Standalone-Modus",
                desc: "Der Standalone-Modus erstellt einen Ordner, der eine ausführbare Datei enthält, um diese auszuführen.",
            },
            onefile: {
                name: "Onefile-Modus",
                desc: "Der Onefile-Modus erstellt eine einzelne ausführbare Datei für die Bereitstellung.",
            },
            app: {
                name: "App-Modus",
                desc: "Ähnlich wie Onefile, wird aber unter macOS nicht empfohlen.",
            },
            module: {
                name: "Modul-Modus",
                desc: "Der Modul-Modus generiert ein Modul",

            },
            package: {
                name: "Paket-Modus",
                desc: "Generiert ein Modul\n" +
                    "und enthält auch alle Untermodule und Unterpakete.",
            },
        },
    },
    standalone: {
        name: "Standalone-Modus",
        desc: "Aktiviert den Standalone-Modus für die Ausgabe. Dies ermöglicht Ihnen, die Binärdatei auf andere Maschinen zu übertragen, ohne eine vorhandene Python-Umgebung zu benötigen. Dies bedeutet auch, dass sie groß wird.\nEs werden die Optionen \"--follow-imports\" und \"--python-flag=no_site\" aktiviert.",
    },
    onefile: {
        name: "Onefile-Modus",
        desc: "Aktiviert den Onefile-Modus zusätzlich zum Standalone-Modus. Das bedeutet, dass statt eines Ordners eine komprimierte ausführbare Datei erstellt und verwendet wird.",
    },
    python_flag: {
        name: "Python-Flags",
        desc: "Die zu verwendenden Python-Flags. Standardmäßig das, womit Sie Nuitka ausgeführt haben, was die Verwendung eines bestimmten Modus erzwingt. Dies sind auch Optionen, die in Standard-Python-Ausführungsdateien vorhanden sind.",
        elements: {
            s: {
                name: "Keine site-packages-Verzeichnisse einschließen",
                desc: "Alias für no_site",
            },
            static_hashes: {
                name: "Statische Hashes",
                desc: "Keine Hash-Randomisierung verwenden",
            },
            no_warnings: {
                name: "Warnungen deaktivieren",
                desc: "Keine Python-Laufzeitwarnungen ausgeben",
            },
            o: {
                name: "Keine Fehlerprüfungen",
                desc: "Keine Debugging-/Assert-Anweisungen einschließen",
            },
            no_docstrings: {
                name: "Keine Docstrings",
                desc: "Keine Docstrings einschließen",
            },
            u: {
                name: "Kein Buffering verwenden",
                desc: "Alias für unbuffered, kein Buffering verwenden",
            },
            isolated: {
                name: "Keinen externen Code laden",
                desc: "Keinen externen Code laden",
            },
            p: {
                name: "Aktuelles Verzeichnis nicht für die Modulsuche verwenden",
                desc: "Alias für safe_path, aktuelles Verzeichnis nicht für die Modulsuche verwenden",
            },
            m: {
                name: " Paket-Modus",
                desc: "Paket-Modus, kompilieren zu \"package.__main__\"",
            },
        },
    },
    python_debug: {
        name: "Python-Debug",
        desc: "Ob eine Debug-Version verwendet werden soll. Standardmäßig wird die Version verwendet, mit der Sie Nuitka ausführen, was wahrscheinlich eine Nicht-Debug-Version ist. Nur für Debugging- und Testzwecke.",
    },
    python_for_scons: {
        name: "Python-Pfad für Scons",
        desc: "Gibt den Pfad zu einer Python-Binärdatei an, die Scons verwenden soll, wenn mit Python 3.4 kompiliert wird. Andernfalls kann Nuitka das Python verwenden, mit dem Sie Nuitka ausführen,\n" + "oder die Nuitka-Installation selbst finden, z. B. in der Windows-Registrierung. Unter Windows wird Python 3.5 oder höher benötigt, unter Nicht-Windows funktioniert auch Python 2.6 oder Python 2.7.",
    },
    main: {
        name: "Hauptprogramm-Pfad",
        desc: "Wenn nur einmal angegeben (z.B. --main=\"1.py\"), ersetzt dies das Positionsargument, d.h. den Namen der zu kompilierenden Datei (den Einstiegspunkt).\n" + "Wenn mehrmals angegeben (z.B. --main=\"1.py\" --main=\"2.py\"), aktiviert dies \"multidist\", was Ihnen erlaubt, Binärdateien zu erstellen, die vom Dateinamen oder Aufrufnamen abhängen.\n" + "(Ermöglicht mehreren Hauptprogrammen die Verwendung derselben Kompilierungsparameter)\n",
    },
    // Steuerung der Aufnahme von Modulen und Paketen im Ergebnis
    include_package: {
        name: "Paket einschließen",
        desc: "Schließt ein ganzes Paket ein. Wird in Form eines Python-Namespace angegeben, z. B. 'some_package.sub_package'.\n" + "Nuitka findet es dann und schließt es sowie alle Module ein, die es am Speicherort des von ihm erstellten Binär- oder Erweiterungsmoduls darunter findet, und macht sie für den Code importierbar.\n" + "Um unerwünschte Unterpakete, z. B. Tests, zu vermeiden, können Sie '--nofollow-import-to=*.tests' verwenden. Standardmäßig leer.\n" + "(Hinweis: Einschluss bedeutet hier, dass das eingeschlossene Paket oder Modul in die Binärdatei kompiliert wird und vom Code importiert werden kann, nicht dass es als Abhängigkeit behandelt wird)\n",
    },
    include_module: {
        name: "Modul einschließen",
        desc: "Schließt ein einzelnes Modul ein. Wird in Form eines Python-Namespace angegeben, z. B. 'some_package.some_module'. Nuitka findet es dann und schließt es in die von ihm erstellte Binärdatei oder das Erweiterungsmodul ein,\n" + "und macht es für den Code importierbar. Standardmäßig leer.",
    },
    include_plugin_directory: {
        name: "Plugin-Verzeichnis einschließen",
        desc: "Schließt auch Code ein, der in diesem Verzeichnis gefunden wird, und behandelt ihn als jeweilige Hauptdateien. Dies überschreibt andere Einschlussoptionen.\n" + "Sie sollten stattdessen die anderen Einschlussoptionen bevorzugen. Diese finden durch Namen statt durch Dateinamen, die Dinge im 'sys.path' finden können.\n" + "Diese Option ist nur für sehr spezielle Anwendungsfälle. Kann mehrmals angegeben werden. Standardmäßig leer.",
    },
    include_plugin_files: {
        name: "Plugin-Dateien einschließen",
        desc: "Schließt Dateien ein, die dem PATTERN entsprechen. Überschreibt alle anderen Follow-Optionen. Kann mehrmals angegeben werden. Standardmäßig leer.",
    },
    prefer_source_code: {
        name: "Quellcode bevorzugen",
        desc: "Für bereits kompilierte Erweiterungsmodule, wenn sowohl Quellcode als auch Erweiterungsmodul vorhanden sind, wird normalerweise das Erweiterungsmodul verwendet, aber für beste Leistung ist es am besten, aus dem verfügbaren Quellcode zu kompilieren.\n" + "Wenn dies nicht gewünscht ist, kann die Warnung mit --nop-prefer-source-code deaktiviert werden. Standardmäßig deaktiviert.",
    },
    recompile_extension_modules: {
        name: "Erweiterungsmodule neu kompilieren",
        desc: "Erzwingt die Neukompilierung von Erweiterungsmodulen aus dem Quellcode. Ermöglicht feinkörnige Kontrolle darüber, welche Erweiterungsmodule mit Namensmustern neu kompiliert werden.\n" +
            "Nützlich, wenn Sie sicherstellen möchten, dass bestimmte Module für eine bessere Optimierung aus dem Quellcode kompiliert werden. Kann mehrmals angegeben werden. Standardmäßig leer.",
    },
    // Steuerung der Folgeimporte in Modulen
    follow_imports: {
        name: "Importierte Module folgen",
        desc: "Folgt allen importierten Modulen. Standardmäßig aktiviert im Standalone-Modus, sonst deaktiviert.",
    },
    follow_import_to: {
        name: "Import folgen zu Modul",
        desc: "Folgt einem Modul, wenn es verwendet wird, oder einem ganzen Paket, wenn es sich um ein Paket handelt. Kann mehrmals angegeben werden. Standardmäßig leer.",
    },
    nofollow_import_to: {
        name: "Import nicht folgen zu Modul",
        desc: "Folgt einem Modul trotz seines Namens nicht, oder einem ganzen Paket, wenn es sich um einen Paketnamen handelt, unabhängig von allen anderen Optionen. Diese Option überschreibt alle anderen Follow-Optionen.\n" +
            "Dies kann auch Muster enthalten, z. B. \"*.tests\". Kann mehrmals angegeben werden. Standardmäßig leer.",
    },
    nofollow_imports: {
        name: "Keine Imports folgen",
        desc: "Steigt nicht rekursiv in importierte Module ab, was alle anderen Einschlussoptionen überschreibt und nicht für den Standalone-Modus verwendet werden kann. Standardmäßig deaktiviert.",
    },
    follow_stdlib: {
        name: "Standardbibliothek folgen",
        desc: "Steigt auch in Module ab, die aus der Standardbibliothek importiert wurden, was die Kompilierungszeit stark erhöht und noch nicht gut getestet ist, manchmal funktioniert es vielleicht nicht. Standardmäßig deaktiviert.",
    },
    // Onefile-Optionen
    onefile_tempdir_spec: {
        name: "Onefile Temporäres Verzeichnis-Spezifikation",
        desc: "Verwendet dies als Ordner für die Entpackung im Onefile-Modus.\n" +
            "Eine Zeichenkette wie '{CACHE_DIR}/{COMPANY}/{PRODUCT}/{VERSION}' ist ein guter statischer Cache-Pfad, der nicht gelöscht wird.",
        elements: {
            user_tempdir: {
                name: "Benutzer-Temp-Verzeichnis",
                desc: "Verwendet das temporäre Verzeichnis des Benutzers",
            },
        },
    },
    onefile_cache_mode: {
        name: "Onefile Cache-Modus",
        desc: "Dieser Modus wird von der von Ihnen verwendeten Spezifikation abgeleitet.\n" +
            "Wenn diese runtime-abhängige Pfade enthält, löst 'auto' zu 'temporary' auf, was sicherstellt, dass die entpackten Binärdateien nach der Ausführung gelöscht werden.\n" +
            "'cached' löscht sie nicht und verwendet deren Inhalt bei der nächsten Ausführung für schnellere Startzeiten wieder."
        ,
        elements: {
            auto: {
                name: "Automatisch",
                desc: "Ableitung basierend auf der Spezifikation",
            },
            temporary: {
                name: "Temporärer Modus",
                desc: "Löscht die entpackten Binärdateien nach der Ausführung",
            },
            cached: {
                name: "Cache-Modus",
                desc: "Behält die entpackten Binärdateien nach der Ausführung bei",
            },
        },
    },
    onefile_child_grace_time: {
        name: "Onefile Child-Grace-Zeit",
        desc: "Beim Beenden des Child-Prozesses, z. B. aufgrund von STRG-C oder Beenden usw., erhält der Python-Code einen \"KeyboardInterrupt\", den er verarbeiten kann, z. B. um Daten zu leeren.\n" +
            "Dies ist die Zeit in Millisekunden, bevor der Child-Prozess hart beendet wird. Standardmäßig 5000.",
    },
    onefile_no_compression: {
        name: "Onefile ohne Komprimierung",
        desc: "Deaktiviert die Komprimierung des Payloads beim Erstellen eines Onefile. Dies dient hauptsächlich Debugging-Zwecken oder zur Zeitersparnis. Standardmäßig deaktiviert.",
    },
    onefile_as_archive: {
        name: "Onefile als Archiv",
        desc: "Verwendet beim Erstellen des Onefile ein Archivformat, das von \"nuitka-onefile-unpack\" entpackt werden kann, anstelle eines Streams, den nur das Onefile-Programm selbst entpacken kann.",
    },
    onefile_no_dll: {
        name: "Keine DLLs im Onefile",
        desc: "Beim Erstellen eines Onefile verwenden einige Plattformen (derzeit Windows, wenn keine gecachte Position verwendet wird) standardmäßig eine DLL anstelle der ausführbaren Datei zur Speicherung des Python-Codes.\n" +
            "Die Aktivierung dieser Option bewirkt, dass auch in den entpackten Dateien ausführbare Dateien anstelle von DLLs verwendet werden. Standardmäßig deaktiviert.",

    },
    // Datendateien
    include_package_data: {
        name: "Paketdaten einschließen",
        desc: "Schließt Datendateien eines bestimmten Paketnamens ein. DLLs und Erweiterungsmodule sind keine Datendateien und werden daher auf diese Weise nicht eingeschlossen. Es können Dateinamensmuster wie unten beschrieben verwendet werden.\n" +
            "Standardmäßig werden Paketdaten nicht eingeschlossen, können aber durch Paketkonfigurationen erreicht werden.\n" +
            "Dies schließt nur Nicht-DLLs, Nicht-Erweiterungsmodule, d. h. tatsächliche Datendateien ein. Nach einem \":\" kann optional ein Dateinamensmuster angegeben werden, um nur passende Dateien auszuwählen.\n" +
            "Beispiele: \"--include-package-data=package_name\" (alle Dateien)\n" +
            "\"--include-package-data=package_name:*.txt\" (nur bestimmte Typen)\"\n" +
            "--include-package-data=package_name:some_filename.dat\" (spezifische Datei).\n" +
            "Standardmäßig leer.",
    },
    include_data_files: {
        name: "Datendateien einschließen",
        desc: "Schließt Datendateien ein, die durch Dateinamen zugewiesen sind. Es gibt viele erlaubte Formen.\n" +
            "Mit '--include-data-files=/pfad/zu/datei/.txt=ordner_name/some.txt' wird eine Datei kopiert, was bei mehr als zehn Dateien zu einem Fehler führt.\n" +
            "Mit '--include-data-files=/pfad/zu/dateien/.txt=ordner_name/' werden alle passenden Dateien in diesen Ordner gelegt.\n" +
            "Für rekursives Kopieren gibt es eine Form mit drei Werten: '--include-data-files=/pfad/zu/scan=ordner_name=/**/*.txt', die die Dateistruktur des Verzeichnisses beibehält.\n" +
            "Standardmäßig leer.",
    },
    include_data_dir: {
        name: "Datenverzeichnis einschließen",
        desc: "Schließt Datendateien eines ganzen Verzeichnisses in die Distribution ein. Dies ist rekursiv.\n" +
            "Wenn Sie nicht-rekursives Einschließen wünschen, sehen Sie sich '--include-data-files' mit einem Muster an.\n" +
            "Zum Beispiel '--include-data-dir=/pfad/some_dir=data/some_dir' für eine normale Kopie des ganzen Verzeichnisses.\n" +
            "Alle Nicht-Code-Dateien werden eingeschlossen, und Sie können sie auch mit der Option '--noinclude-data-files' entfernen.\n" +
            "Standardmäßig leer.",
    },
    noinclude_data_files: {
        name: "Keine Datendateien einschließen",
        desc: "Schließt Datendateien aus, die mit der gegebenen Dateinamensform übereinstimmen. Dies bezieht sich auf den Zieldateinamen, nicht auf den Quellpfad.\n" +
            "Um beispielsweise ein Dateimuster aus den Paketdaten von 'package_name' zu ignorieren, sollte es als \"package_name/*.txt\" übereinstimmen,\n" +
            "oder für ein ganzes Verzeichnis einfach \"package_name\" verwenden. Standardmäßig leer.",
    },
    include_onefile_external_data: {
        name: "Onefile Externe Daten einschließen",
        desc: "Schließt angegebene Datendateimuster außerhalb der Onefile-Binärdatei anstatt darin ein. Diese Option ist nur sinnvoll, wenn mit '--onefile' kompiliert wird.\n" +
            "Die Dateien müssen zuerst auf andere Weise als eingeschlossen angegeben werden, dann verweist diese Option auf den Zielpfad in der Distribution. Standardmäßig leer.",
    },
    list_package_data: {
        name: "Paketdaten auflisten",
        desc: "Gibt die für den gegebenen Paketnamen gefundenen Datendateien aus. Standardmäßig nicht ausgeführt.",
    },
    include_raw_dir: {
        name: "Rohverzeichnis einschließen",
        desc: "Schließt ein rohes Verzeichnis unverändert in die Distribution ein. Dies ist rekursiv. Überprüfen Sie '--include-data-dir' für die Verwendung der richtigen Option. Standardmäßig leer.",
    },
    // Metadaten-Unterstützung
    include_distribution_metadata: {
        name: "Distributions-Metadaten einschließen",
        desc: "Schließt Metadateninformationen für den gegebenen Distributionsnamen ein. Einige Pakete prüfen auf das Vorhandensein von Metadaten, Version, Einstiegspunkten usw., und ohne diese Optionen funktioniert es nur, wenn dies zur Kompilierungszeit erkannt wird, was nicht immer der Fall ist.\n" +
            "Dies ist natürlich nur für Pakete sinnvoll, die in die Kompilierung einbezogen sind. Standardmäßig leer.",
    },
    list_distribution_metadata: {
        name: "Distributions-Metadaten auflisten",
        desc: "Gibt die Liste aller Pakete der Distribution mit Details aus. Standardmäßig nicht ausgeführt.",
    },
    // DLL-Dateien (Dynamische Link-Bibliothek)
    noinclude_dlls: {
        name: "Keine DLLs einschließen",
        desc: "Schließt DLL-Dateien aus, die mit dem gegebenen Dateinamensmuster übereinstimmen. Dies bezieht sich auf den Zieldateinamen, nicht auf den Quellpfad.\n" +
            "Um beispielsweise die in das Paket 'package_name' eingeschlossene DLL 'someDLL' zu ignorieren, sollte sie als 'package_name/someDLL.*' übereinstimmen.\n" +
            "Standardmäßig leer.",
    },
    list_package_dlls: {
        name: "Paket-DLLs auflisten",
        desc: "Findet die DLLs für den gegebenen Paketnamen und gibt sie aus. Standardmäßig nicht ausgeführt.",
    },
    list_package_exe: {
        name: "Exe-Dateien des gegebenen Paketnamens auflisten",
        desc: "Gibt die für den gegebenen Paketnamen gefundenen EXE-Dateien aus. Standardmäßig nicht ausgeführt.",
    },
    // Steuerung der von Nuitka ausgegebenen Warnungen
    warn_implicit_exceptions: {
        name: "Warnung bei impliziten Ausnahmen",
        desc: "Aktiviert Warnungen für implizite Ausnahmen, die zur Kompilierungszeit erkannt werden.",
    },
    warn_unusual_code: {
        name: "Warnung bei ungewöhnlichem Code",
        desc: "Aktiviert Warnungen für ungewöhnlichen Code, der zur Kompilierungszeit erkannt wird.",
    },
    assume_yes_for_downloads: {
        name: "Annahme: Downloads erlaubt",
        desc: "Erlaubt Nuitka bei Bedarf das Herunterladen externen Codes. Z. B. Abhängigkeiten-Walker, Ccache oder sogar GCC unter Windows. Zum Deaktivieren leiten Sie die Eingabe vom Nul-Gerät um.\n" +
            "Z. B. '</dev/null' oder '<NUL:'. Standardmäßig wird bei Downloads nachgefragt.",
    },
    nowarn_mnemonic: {
        name: "Keine Warnung Mnemonic",
        desc: "Deaktiviert Warnungen für das gegebene Mnemonic. Diese sollen sicherstellen, dass Sie sich bestimmter Themen bewusst sind, und verweisen oft auf die Nuitka-Website. Das Mnemonic ist der Teil am Ende der URL ohne HTML-Suffix. Kann mehrmals angegeben werden und akzeptiert Shell-Muster. Standardmäßig leer.",
    },
    // Sofortige Ausführung nach der Kompilierung
    run: {
        name: "Sofort ausführen",
        desc: "Führt die erstellte Binärdatei (oder das kompilierte Modul importieren) sofort aus. Standardmäßig deaktiviert.",
    },
    debugger: {
        name: "In Debugger ausführen",
        desc: "Führt in einem Debugger (z. B. \"gdb\" oder \"lldb\") aus, um automatisch einen Stack-Trace zu erhalten.\n" +
            "Der Debugger wird automatisch ausgewählt, es sei denn, der Debugger-Name wird über die Umgebungsvariable NUITKA_DEBUGGER_CHOICE angegeben.\n" +
            "Standardmäßig deaktiviert.",
    },
    debugger_choice: {
        name: "Debugger-Auswahl",
        desc: "Wählen Sie einen bestimmten Debugger zur Verwendung mit der Option --debugger. Dies ermöglicht die Angabe beliebiger Debugger anstelle der automatischen Erkennung.\n" +
            "Zum Beispiel: gdb, lldb oder ein benutzerdefinierter Debugger. Standardmäßig automatische Auswahl.",
    },
    // Kompilierungsoptionen
    user_package_configuration_files: {
        name: "Benutzer Paketkonfigurationsdateien",
        desc: "Vom Benutzer bereitgestellte Yaml-Dateien, die Paketkonfigurationen enthalten. Sie können DLL-Dateien einschließen, Redundanzen entfernen und versteckte Abhängigkeiten hinzufügen. Konsultieren Sie das Nuitka-Paketkonfigurationshandbuch\n" +
            "für die vollständige Nutzung des Formats. Kann mehrmals angegeben werden. Standardmäßig leer.",
    },
    full_compat: {
        name: "Volle CPython-Kompatibilität",
        desc: "Stellt absolute Kompatibilität mit CPython sicher. Erlaubt nicht einmal geringfügige Abweichungen vom CPython-Verhalten, z. B. keine besseren Tracebacks oder Ausnahme-Nachrichten.\n" +
            "Diese Verhaltensweisen sind nicht wirklich Inkompatibilitäten, nur anders oder schlechter. Dies ist nur für Tests und sollte nicht verwendet werden.",
    },
    file_reference_choice: {
        name: "Dateireferenz-Auswahl",
        desc: "Wählt den Wert für \"__file__\". Binärdateien und Module, die \"runtime\" (d.h. der Standardwert für Standalone-Binärdateien und Modus) erstellt wurden, verwenden ihre eigene\n" +
            "Position, um den Wert für \"__file__\" abzuleiten. Eingeschlossene Pakete geben vor, sich in einem Verzeichnis unter dieser Position zu befinden. Dies ermöglicht das Einschließen von Datendateien in die Bereitstellung.\n" +
            "Wenn Sie nur beschleunigen, ist es am besten, den \"original\"-Wert zu verwenden, bei dem die Quellverzeichnisposition verwendet wird. D.h. es wird die Position der Quelldatei verwendet. Wenn \"frozen\" verwendet wird,\n" +
            "wird die Notation \"<frozen module_name>\" verwendet. Aus Kompatibilitätsgründen hat der Wert für \"__file__\" immer das Suffix \".py\", unabhängig davon, was sein eigentlicher Wert ist.",
        elements: {
            original: {
                name: "original",
                desc: "Verwendet die Quellverzeichnisposition",
            },
            frozen: {
                name: "frozen",
                desc: "Verwendet die Notation \"<frozen module_name>\"",
            },
        },
    },
    module_name_choice: {
        name: "Modulname-Auswahl",
        desc: "Wählt den Wert für \"__name__\" und \"__package__\". Module, die mit \"runtime\" (d.h. der Standardwert für den Modulmodus) erstellt wurden, verwenden das Paket\n" +
            "um den Wert für \"__package__\" für volle Kompatibilität abzuleiten. Der \"original\"-Wert (d.h. der Standardwert für andere Modi) erlaubt mehr statische Optimierung, ist aber inkompatibel für Module, die normalerweise\n" +
            "in beliebige Pakete geladen werden können.",
        elements: {
            original: {
                name: "original",
                desc: "Erlaubt mehr statische Optimierung (Standardwert für andere Modi)",
            },
            runtime: {
                name: "runtime",
                desc: "Verwendet das Paket, um den Wert für \"__package__\" abzuleiten (Standardwert für den Modulmodus)",
            },

        },
    },
    // Ausgabeoptionen
    output_filename: {
        name: "Ausgabedateiname",
        desc: "Gibt den Namen der ausführbaren Datei an. Erweiterungsmodule und der Standalone-Modus haben diese Option nicht und verursachen bei Verwendung einen Fehler. Dies kann Pfadinformationen enthalten.\n" +
            "Standardmäßig \"<program_name>.exe\" auf der aktuellen Plattform.",
        elements: {
            program_name: {
                name: "Programmname",
                desc: "<program_name>",
            },
        },
    },
    output_dir: {
        name: "Ausgabeverzeichnis",
        desc: "Gibt an, wo die Zwischendateien und die endgültige Ausgabe abgelegt werden sollen. Das gewählte Verzeichnis wird den Build-Ordner, den Distributionsordner, die Binärdatei usw. enthalten. Standardmäßig das aktuelle Verzeichnis.",
        elements: {
            current_directory: {
                name: "Aktuelles Verzeichnis",
                desc: "Aktuelles Verzeichnis",
            },
        },
    },
    remove_output: {
        name: "Build-Ordner entfernen",
        desc: "Entfernt den Build-Ordner nach der Erstellung der exe- oder Moduldatei. Standardmäßig deaktiviert.",
    },
    no_pyi_file: {
        name: "Keine pyi-Datei generieren",
        desc: "Generiert keine \".pyi\"-Datei für die von Nuitka erstellten Erweiterungsmodule zur Erkennung impliziter Importe. Standardmäßig deaktiviert.",
    },
    no_pyi_stubs: {
        name: "Keine pyi-Stubs erstellen",
        desc: "Verwendet stubgen nicht, wenn '.pyi'-Dateien für von Nuitka erstellte Erweiterungsmodule generiert werden.\n" +
            "Diese würden Ihre API offenlegen, aber stubgen kann Probleme verursachen. Standardmäßig deaktiviert.",
    },
    // Bereitstellungssteuerung
    deployment: {
        name: "Bereitstellungsmodus",
        desc: "Deaktiviert Code, der das Finden von Kompatibilitätsproblemen erleichtern soll. Zum Beispiel verhindert dies die Ausführung mit dem Argument '-c', das im Allgemeinen von versucht wird, Code\n" +
            "aus Modulen auszuführen und dazu führen kann, dass das Programm sich selbst wiederholt startet. Deaktivieren Sie dies, sobald Sie beim Endbenutzer bereitstellen, während der Entwicklung ist dies sehr hilfreich, um typische Probleme zu finden.\n" +
            "Standardmäßig deaktiviert.",
    },
    no_deployment_flag: {
        name: "Kein Bereitstellungs-Flag",
        desc: "Behält den Bereitstellungsmodus bei, deaktiviert aber selektiv Teile der Funktion. Fehler im Bereitstellungsmodus geben diese Kennungen aus. Standardmäßig leer.",
    },
    // Umgebungssteuerung
    force_runtime_environment_variable: {
        name: "Laufzeit-Umgebungsvariable erzwingen",
        desc: "Erzwingt, dass eine Umgebungsvariable auf den gegebenen Wert gesetzt wird. Standardmäßig leer.",
    },
    // Debug-Funktionen
    debug: {
        name: "Debug-Modus",
        desc: "Führt alle möglichen Selbstprüfungen durch, um Fehler in Nuitka zu finden, nicht für die Produktion verwenden.\n" +
            "Standardmäßig deaktiviert.",
    },
    no_debug_immortal_assumptions: {
        name: "Debug-Annahmen zu unsterblichen Objekten deaktivieren",
        desc: "Deaktiviert Prüfungen, die normalerweise mit \"--debug\" durchgeführt werden. Prüft Annahmen über bekannte unsterbliche Objekte nicht, dies gilt für Python 3.12 und höher.\n" +
            "Einige C-Bibliotheken könnten diese beschädigen. Wird standardmäßig geprüft, wenn \"--debug\" aktiviert ist.",
    },
    no_debug_c_warnings: {
        name: "C-Debug-Warnungen deaktivieren",
        desc: "Deaktiviert Prüfungen, die normalerweise mit \"--debug\" durchgeführt werden.\n" +
            "Die C-Kompilierung kann Warnungen erzeugen, was für einige Pakete normalerweise kein Problem darstellt, insbesondere für unbenutzte Werte.",
    },
    unstripped: {
        name: "Debug-Informationen nicht entfernen",
        desc: "Behält Debug-Informationen in den generierten Objektdateien für eine bessere Interaktion mit Debuggern. Standardmäßig deaktiviert.",
    },
    profile: {
        name: "Performance-Analyse",
        desc: "Aktiviert die VMprof-basierte Zeitmessung. Derzeit nicht nutzbar. Standardmäßig deaktiviert.",
    },
    trace_execution: {
        name: "Ausführung verfolgen",
        desc: "Verfolgt die Ausführung und gibt sie aus. Gibt die Codezeile aus, bevor der Code ausgeführt wird. Standardmäßig deaktiviert.",
    },
    xml: {
        name: "XML ausgeben",
        desc: "Schreibt die interne Programmstruktur und Optimierungsergebnisse als XML in den gegebenen Dateinamen.",
    },
    experimental: {
        name: "Experimentell",
        desc: "Verwendet Funktionen, die als \"experimentell\" deklariert sind. Könnte keine Auswirkungen haben, wenn im Code keine experimentellen Funktionen vorhanden sind.\n" +
            "Verwendet das geheime Tag jeder experimentellen Funktion (überprüfen Sie den Quellcode).",
    },
    low_memory: {
        name: "Speicherarmer Modus",
        desc: "Versucht, weniger Speicher zu verwenden, indem die Verzweigung für C-Kompilierungsaufgaben reduziert und weniger speicherintensive Optionen verwendet werden. Für eingebettete Maschinen. Bei Problemen mit zu wenig Speicher verwenden. Standardmäßig deaktiviert.",
    },
    create_environment_from_report: {
        name: "Umgebung aus Bericht erstellen",
        desc: "Erstellt eine neue virtuelle Umgebung an einem nicht existierenden Pfad basierend auf der gegebenen Berichtsdatei, z. B. '--report=compilation-report.xml'. Standardmäßig nicht ausgeführt.",
    },
    generate_c_only: {
        name: "Nur C-Quellcode generieren",
        desc: "Generiert nur C-Quellcode und kompiliert nicht in eine Binärdatei oder ein Modul. Dies dient Debugging- und Code-Coverage-Analysen und verschwendet keine CPU. Standardmäßig deaktiviert.\n" +
            "Denken Sie nicht, dass Sie dies direkt verwenden können.",
    },
    // Nuitka-Entwicklungsfunktionen
    devel_missing_code_helpers: {
        name: "Devel - Fehlende Code-Helfer",
        desc: "Meldet Warnungen über versuchte, aber nicht existierende Typ-spezifische Code-Helfer.\n" +
            "Dies hilft bei der Identifizierung von Gelegenheiten, die generierte Code-Optimierung durch ungenutztes Typenwissen zu verbessern. Standardmäßig False.",
    },
    devel_missing_trust: {
        name: "Devel - Fehlendes Vertrauen melden",
        desc: "Meldet Warnungen über Importe, denen vertraut werden könnte, aber derzeit nicht. Dies soll Gelegenheiten zur Verbesserung der Handhabung harter Module identifizieren,\n" +
            "was manchmal mehr statische Optimierung erlauben kann. Standardmäßig False.",
    },
    devel_recompile_c_only: {
        name: "Devel - Nur C-Quellcode neu kompilieren",
        desc: "Dies ist keine inkrementelle Kompilierung und dient nur der Nuitka-Entwicklung. Kompiliert vorhandene Dateien in C neu. Ermöglicht die Kompilierung bearbeiteter C-Dateien für schnelles Debugging von Änderungen am generierten Quellcode.\n" +
            "Z. B. um zu sehen, ob der Code passiert, Werte ausgegeben werden usw. Standardmäßig deaktiviert. Welche Dateien es ansieht, hängt von der Kompilierung des Python-Quellcodes ab.",
    },
    devel_internal_graph: {
        name: "Devel - Interner Graph",
        desc: "Erstellt interne Graphen des Optimierungsprozesses, nicht für ganze Programme verwenden, nur für kleine Testfälle. Standardmäßig deaktiviert.",
    },
    // Auswahl des Backend-C-Compilers
    clang: {
        name: "Clang erzwingen",
        desc: "Erzwingt die Verwendung von Clang zur Kompilierung. Unter Windows erfordert dies eine funktionierende Visual Studio-Installation zur Unterstützung. Standardmäßig deaktiviert.",
    },
    mingw64: {
        name: "MinGW64 erzwingen",
        desc: "Erzwingt die Verwendung von MinGW64 unter Windows. Standardmäßig deaktiviert, es sei denn, MSYS2 mit MinGW Python wird verwendet.",
    },
    msvc: {
        name: "MSVC-Version verwenden",
        desc: "Erzwingt die Verwendung einer bestimmten MSVC-Version unter Windows. Erlaubte Werte sind \"14.3\" (MSVC 2022) und andere MSVC-Versionsnummern.\n" +
            "Verwenden Sie \"list\", um eine Liste der installierten Compiler zu erhalten, oder \"latest\". Standardmäßig wird die neueste MSVC-Version verwendet, falls verfügbar. Andernfalls wird MinGW64 verwendet.",
        elements: {
            latest: {
                name: "Neueste Version",
                desc: "Verwendet die neueste MSVC-Version",
            },
        },
    },
    jobs: {
        name: "Anzahl paralleler Kompilierungsjobs",
        desc: "Gibt die Anzahl der erlaubten parallelen C-Compiler-Jobs an. Ein negativer Wert bedeutet die Anzahl der System-CPUs minus dem gegebenen Wert.\n" +
            "Standardmäßig werden alle System-CPUs verwendet, es sei denn, der Speicherarme Modus ist aktiviert, dann ist der Standardwert 1.",
    },
    lto: {
        name: "Linkzeitoptimierung",
        desc: "Verwendet Linkzeitoptimierung (MSVC, gcc, clang). Erlaubte Werte sind \"yes\" (ja), \"no\" (nein) und \"auto\" (automatisch) (bekannt verfügbar). Standardmäßig \"auto\".",
        elements: {
            yes: {
                name: "Ja",
                desc: "Verwendet Linkzeitoptimierung",
            },
            no: {
                name: "Nein",
                desc: "Verwendet keine Linkzeitoptimierung",
            },
            auto: {
                name: "Automatisch",
                desc: "Verwendet Linkzeitoptimierung automatisch",
            },
        },
    },
    static_libpython: {
        name: "Statische libpython verwenden",
        desc: "Verwendet die statische Python-Bibliothek. Erlaubte Werte sind \"yes\" (ja), \"no\" (nein) und \"auto\" (automatisch) (bekannt verfügbar). Standardmäßig \"auto\".",
        elements: {
            yes: {
                name: "Ja",
                desc: "Verwendet die statische Python-Bibliothek",
            },
            no: {
                name: "Nein",
                desc: "Verwendet nicht die statische Python-Bibliothek",
            },
            auto: {
                name: "Automatisch",
                desc: "Verwendet die statische Python-Bibliothek automatisch",
            },
        },
    },
    cf_protection: {
        name: "gcc Compiler CF Protection Modus",
        desc: "Diese Option ist spezifisch für gcc. Wählt den \"cf-protection\" (cf-Schutz) Modus für den gcc Compiler. Der Standardwert \"auto\" verwendet den Standard von gcc, aber Sie können dies überschreiben,\n" +
            "z. B. mit dem Wert \"none\", um es zu deaktivieren. Siehe die gcc-Dokumentation für Details zu \"-fcf-protection\".",
        elements: {
            auto: {
                name: "Automatisch",
                desc: "Verwendet den Standard von gcc",
            },
        },
    },
    // Cache-Steuerung
    disable_cache: {
        name: "Cache deaktivieren",
        desc: "Deaktiviert ausgewählte Caches, \"all\" für alle Caches. Aktuell erlaubte Werte sind: \"all (alle)\", \"ccache\", \"bytecode (Bytecode)\",\n" +
            "\"compression (Kompression)\", \"dll-dependencies (dll-Abhängigkeiten)\".\n" +
            "Kann mehrmals angegeben oder mit Kommas getrennt werden. Standardmäßig keine.",
        elements: {
            all: {
                name: "Alle",
                desc: "Deaktiviert alle Caches",
            },
            ccache: {
                name: "ccache Cache",
                desc: "Versucht nicht, ccache (gcc, clang etc.) oder clcache (MSVC, clangcl) zu verwenden.",
            },
            bytecode: {
                name: "Bytecode Cache",
                desc: "Verwendet die Abhängigkeitsanalyse für Module nicht wieder, insbesondere nicht für Module aus der Standardbibliothek, die als Bytecode eingeschlossen werden.",
            },
            compression: {
                name: "Kompressions-Cache",
                desc: "Deaktiviert den Kompressions-Cache",
            },
            dll_dependencies: {
                name: "dll-Abhängigkeiten Cache",
                desc: "Deaktiviert den Abhängigkeiten-Walker-Cache. Dies führt zu einer deutlich längeren Zeit für die Erstellung des Distributionsordners, kann aber verwendet werden, wenn vermutet wird, dass der Cache Fehler verursacht.",
            },
        },

    },
    clean_cache: {
        name: "Cache bereinigen",
        desc: "Bereinigt den gegebenen Cache vor der Ausführung, \"all\" für alle Caches. Aktuell erlaubte Werte sind:\n" +
            "\"all (alle)\", \"ccache\", \"bytecode (Bytecode)\", \"compression (Kompression)\", \"dll-dependencies (dll-Abhängigkeiten)\".\n" +
            "Kann mehrmals angegeben oder mit Kommas getrennt werden. Standardmäßig keine.",
        elements: {
            all: {
                name: "Alle",
                desc: "Bereinigt alle Caches",
            },
            ccache: {
                name: "ccache Cache",
                desc: "Bereinigt den ccache Cache",
            },
            bytecode: {
                name: "Bytecode Cache",
                desc: "Bereinigt den Bytecode Cache",
            },
            compression: {
                name: "Kompressions-Cache",
                desc: "Bereinigt den Kompressions-Cache",
            },
            dll_dependencies: {
                name: "dll-Abhängigkeiten Cache",
                desc: "Bereinigt den dll-Abhängigkeiten Cache",
            },
        },
    },
    disable_ccache: {
        name: "ccache deaktivieren",
        desc: "Versucht nicht, ccache (gcc, clang etc.) oder clcache (MSVC, clangcl) zu verwenden. Hat den gleichen Effekt wie --disable-cache=ccache.",
    },
    disable_dll_dependency_cache: {
        name: "dll-Abhängigkeiten Cache deaktivieren",
        desc: "Deaktiviert den Abhängigkeiten-Walker-Cache. Dies führt zu einer deutlich längeren Zeit für die Erstellung des Distributionsordners, kann aber verwendet werden, wenn vermutet wird, dass der Cache Fehler verursacht.\n" +
            "Hat den gleichen Effekt wie --disable-cache=dll-dependencies.",
    },
    force_dll_dependency_cache_update: {
        name: "dll-Abhängigkeiten Cache-Update erzwingen",
        desc: "Wird verwendet, um den Abhängigkeits-Walker-Cache zu aktualisieren. Dies führt zu einer deutlich längeren Zeit für die Erstellung des Distributionsordners, kann aber verwendet werden, wenn vermutet wird, dass der Cache Fehler verursacht oder ein Update benötigt wird.",
    },
    // PGO (Profilgesteuerte Optimierung) Kompilierungsoptionen
    pgo_c: {
        name: "Profilgesteuerte Optimierung",
        desc: "Aktiviert die C-Level-profilgesteuerte Optimierung (PGO), indem zuerst profiliert und dann das Ergebnis in die C-Kompilierung zurückgespeist wird.\n" +
            "Hinweis: Dies ist experimentell und funktioniert noch nicht mit Nuitkas Standalone-Modus. Standardmäßig deaktiviert.",
    },
    pgo_args: {
        name: "PGO-Argumente",
        desc: "Argumente, die während der profilierten Ausführung übergeben werden sollen. Diese Argumente werden an die speziell erstellte ausführbare Datei während des PGO-Profilerstellungslaufs übergeben. Standardmäßig leer.",
    },
    pgo_executable: {
        name: "PGO-Ausführbare Datei",
        desc: "Der Befehl, der zur Sammlung der Profilinformationen ausgeführt werden soll. Wird nur verwendet, wenn Sie ihn über ein vorbereitendes Skript starten müssen. Standardmäßig wird das erstellte Programm verwendet.",
    },
    // Tracing-Funktionen
    report: {
        name: "Bericht ausgeben",
        desc: "Gibt einen XML-Dateinamen ein, um Details über Module, Datendateien, Kompilierung, Plugins usw. in einer XML-Ausgabedatei zu melden. Dies ist auch sehr nützlich, um Probleme zu melden.\n" +
            "Diese Berichte können zum Beispiel verwendet werden, um eine Umgebung mit '--create-environment-from-report' einfach wiederherzustellen, aber die Berichte enthalten viele Informationen. Standardmäßig deaktiviert.",
    },
    report_diffable: {
        name: "Bericht diffbar",
        desc: "Gibt die Daten in einer diffbaren Weise aus, d. h. ohne Zeit- oder Speichernutzungswerte, die sich mit jedem Lauf ändern. Standardmäßig deaktiviert.",
    },
    report_user_provided: {
        name: "Bericht Benutzer bereitgestellt",
        desc: "Meldet Daten, die von Ihnen stammen. Dies kann mehrmals angegeben werden und kann jede Form von \"key=value\" sein, wobei der Schlüssel ein Bezeichner sein sollte,\n" +
            "z. B. mit \"--report-user-provided=pipenv-lock-hash=64a5e4\", um einen Eingabewert zu verfolgen. Standardmäßig leer.",
    },
    report_template: {
        name: "Berichtsvorlage",
        desc: "Bericht durch Vorlage. Erfordert sowohl die Vorlage als auch den Ausgabedateinamen \"template.rst.j2:output.rst\". Für eingebaute Vorlagen siehe das Benutzerhandbuch.\n" +
            "Kann mehrmals angegeben werden. Standardmäßig leer.",
    },
    quiet: {
        name: "Stiller Modus",
        desc: "Unterdrückt alle Informationsausgaben, zeigt aber Warnungen. Standardmäßig deaktiviert.",
    },
    show_scons: {
        name: "Scons anzeigen",
        desc: "Führt das C-Build-Backend Scons aus und zeigt die ausgeführten Befehle sowie Details zu den erkannten Compilern. Standardmäßig deaktiviert.",
    },
    no_progressbar: {
        name: "Kein Fortschrittsbalken",
        desc: "Deaktiviert den Fortschrittsbalken. Standardmäßig deaktiviert.",
    },
    show_progress: {
        name: "Fortschritt anzeigen",
        desc: "Veraltet: Zeigt Fortschrittsinformationen und Statistiken. Deaktiviert den normalen Fortschrittsbalken. Standardmäßig deaktiviert.",
    },
    show_memory: {
        name: "Speicher anzeigen",
        desc: "Zeigt die Speichernutzung. Standardmäßig deaktiviert.",
    },
    show_modules: {
        name: "Module anzeigen",
        desc: "Veraltet: Stattdessen sollten Sie eine '--report'-Datei verwenden. Gibt Informationen über die eingeschlossenen Module und DLLs. Standardmäßig deaktiviert.",
    },
    show_modules_output: {
        name: "Module-Ausgabe-Pfad anzeigen",
        desc: "Zum Festlegen des Speicherorts für die Ausgabe von '--show-modules', sollte ein Dateiname sein. Standardmäßig Standardausgabe.",
    },
    verbose: {
        name: "Ausführlicher Modus",
        desc: "Gibt Details zu den durchgeführten Aktionen aus, insbesondere während der Optimierung kann dies sehr viel ausgeben. Standardmäßig deaktiviert.",
    },
    verbose_output: {
        name: "Ausführlicher Modus Ausgabe-Pfad",
        desc: "Zum Festlegen des Speicherorts für die Ausgabe von '--verbose', sollte ein Dateiname sein. Standardmäßig Standardausgabe.",
    },
    // Allgemeine Betriebssystem-Steuerungen
    force_stdout_spec: {
        name: "Standardausgabe-Spezifikation erzwingen",
        desc: "Erzwingt die Standardausgabe des Programms an diesen Speicherort. Sehr nützlich für Programme, die die Konsole deaktivieren, und für Programme, die das Windows-Dienst-Plugin von Nuitka Commercial verwenden. Standardmäßig nicht aktiv,\n" +
            "z. B. mit '{PROGRAM_BASE}.out.txt', was eine Datei in der Nähe des Programmverzeichnisses ist, siehe Benutzerhandbuch für eine vollständige Liste der verfügbaren Werte.",
    },
    force_stderr_spec: {
        name: "Standardfehlerausgabe-Spezifikation erzwingen",
        desc: "Erzwingt die Standardfehlerausgabe des Programms an diesen Speicherort. Sehr nützlich für Programme, die die Konsole deaktivieren, und für Programme, die das Windows-Dienst-Plugin von Nuitka Commercial verwenden. Standardmäßig nicht aktiv,\n" +
            "z. B. mit '{PROGRAM_BASE}.err.txt', was eine Datei in der Nähe des Programmverzeichnisses ist, siehe Benutzerhandbuch für eine vollständige Liste der verfügbaren Werte.",
    },
    // Windows-spezifische Steuerungen
    windows_console_mode: {
        name: "Windows-Konsolenmodus",
        desc: "Wählt den zu verwendenden Konsolenmodus. Der Standardmodus ist force",
        elements: {
            force: {
                name: "Erzwingen-Modus",
                desc: "Dies erstellt ein Konsolenfenster, wenn keines verfügbar ist, d. h. wenn das Programm von einem Konsolenfenster gestartet wurde.",
            },
            disable: {
                name: "Deaktivieren-Modus",
                desc: "Es wird keine Konsole erstellt oder verwendet.",
            },
            attach: {
                name: "Anhängen-Modus",
                desc: "Verwendet eine vorhandene Konsole für die Ausgabe",
            },
            hide: {
                name: "Ausblenden-Modus",
                desc: "Neu erstellte Konsolen werden ausgeblendet, während bereits vorhandene Konsolen sich wie im 'Erzwingen-Modus' verhalten.",
            },
        },
    },
    windows_icon_from_ico: {
        name: "Windows-Symbol (ico-Datei)",
        desc: "Fügt dem ausführbaren Programm ein Symbol hinzu. Kann mehrmals mit verschiedenen Auflösungen oder einer Datei, die mehrere Icons enthält, angegeben werden. Bei der Auswahl einer Datei, die mehrere Icons enthält,\n" +
            "können Sie auch ein Suffix #<n> verwenden, um ein bestimmtes Icon einzuschließen und alle anderen zu ignorieren, wobei n ein ganzzahliger Index ab 1 ist.",
    },
    windows_icon_from_exe: {
        name: "Windows-Symbol (exe-Datei)",
        desc: "Kopiert das Symbol aus dieser ausführbaren Datei (nur Windows).",
    },
    onefile_windows_splash_screen_image: {
        name: "Onefile Windows Startbildschirm-Bild",
        desc: "Zeigt dieses Bild an, wenn die Anwendung unter Windows als Onefile geladen wird. Standardmäßig deaktiviert.",
    },
    windows_uac_admin: {
        name: "Windows User Control (UAC) Admin-Berechtigungen anfordern",
        desc: "Fordert Windows User Control (UAC) zur Gewährung von Administratorrechten bei der Ausführung an (nur Windows). Standardmäßig deaktiviert.",
    },
    windows_uac_uiaccess: {
        name: "Windows User Control (UAC) UI-Zugriff anfordern",
        desc: "Fordert Windows User Control Permissions (UAC) an, um die Ausführung in bestimmten Ordnern und Fernzugriff zu ermöglichen (nur Windows). Standardmäßig deaktiviert.",
    },
    // macOS-spezifische Steuerungen
    macos_create_app_bundle: {
        name: "macOS App-Bundle erstellen",
        desc: "Erstellt beim Kompilieren für macOS ein Bundle anstelle einer normalen Binär-App. Dies ist die einzige Möglichkeit, die Konsole zu deaktivieren, hochauflösende Grafiken usw. zu erhalten, und es aktiviert den Standalone-Modus. Standardmäßig deaktiviert.",
    },
    macos_target_arch: {
        name: "macOS Zielarchitektur",
        desc: "Auf welcher Architektur dieses Programm ausgeführt werden soll. Die Standardeinstellung und Einschränkungen sind die, die für die Ausführung von Python zulässig sind. Standardmäßig \"native\", was die Architektur ist, auf der Python läuft.",
        elements: {
            native: {
                name: "nativ",
                desc: "Standardwert, ist die Architektur, auf der Python läuft",
            },
        },
    },
    macos_app_icon: {
        name: "macOS App-Symbol-Pfad",
        desc: "Fügt dem App-Bundle ein Symbol hinzu. Kann nur einmal angegeben werden. Standardmäßig das Python-Symbol.",
        elements: {
            python_icon: {
                name: "Python-Symbol",
                desc: "Das Python-Symbol, ist der Standardwert, falls verfügbar",
            },
        },
    },
    macos_signed_app_name: {
        name: "macOS Signierter App-Name",
        desc: "Der Name der App, der für die macOS-Signierung verwendet werden soll. Um die besten Ergebnisse zu erzielen, folgen Sie dem Benennungsformat \"com.IhreFirma.AppName\",\n" +
            "da diese Namen global eindeutig sein müssen und möglicherweise Zugriff auf geschützte APIs gewähren.",
    },
    macos_app_name: {
        name: "macOS App-Name",
        desc: "Der Produktname, der in den macOS-Bundle-Informationen verwendet werden soll. Standardmäßig der Basisdateiname der Binärdatei.",
    },
    macos_app_mode: {
        name: "macOS App-Modus",
        desc: "Der App-Modus für das App-Bundle.",
        elements: {
            gui: {
                name: "GUI-Modus",
                desc: ". Wenn Sie ein Fenster starten und im Dock erscheinen möchten, ist der Standardwert \"gui\" eine gute Wahl.",
            },
            background: {
                name: "Hintergrundmodus",
                desc: "Wenn keine Fenster vorhanden sind, wird die App eine \"background\"-App sein.",
            },
            ui_element: {
                name: "UI-Element-Modus",
                desc: "Für UI-Elemente, die später angezeigt werden, liegt \"ui-element\" dazwischen.\n" +
                    "Die App wird nicht im Dock erscheinen, erhält aber vollen Zugriff auf den Desktop, wenn sie später ein Fenster öffnet.",
            },
        },
    },
    macos_sign_identity: {
        name: "macOS Signatur-Identität",
        desc: "Beim Signieren unter macOS wird standardmäßig eine Ad-hoc-Identität verwendet, aber mit dieser Option können Sie eine andere zu verwendende Identität angeben.\n" +
            "Das Signieren von Code ist unter macOS inzwischen obligatorisch und kann nicht deaktiviert werden. Verwenden Sie \"auto\", um Ihre einzige installierte Identität zu erkennen.\n" +
            "Standardmäßig \"ad-hoc\", wenn nicht angegeben.",
        elements: {
            auto: {
                name: "Automatisch",
                desc: "Erkennt Ihre einzige installierte Identität",
            },
            ad_hoc: {
                name: "Ad-hoc-Signatur",
                desc: "Ad-hoc-Signatur, Standardwert",
            },
        },
    },
    macos_sign_notarization: {
        name: "macOS Signatur-Notarisierung",
        desc: "Verwendet beim Signieren für die Notarisierung die richtige TeamID-Identität von Apple mit den erforderlichen Runtime-Signaturoptionen, damit sie akzeptiert werden kann.",
    },
    macos_sign_keyring_filename: {
        name: "macOS Schlüsselbund-Dateiname",
        desc: "Gibt den Schlüsselbund-Dateinamen für automatisiertes Code-Signing in CI/CD-Umgebungen an. Dies ermöglicht das Signieren ohne UI-Aufforderungen durch direkte Bereitstellung der Schlüsselbund-Datei.\n" +
            "Nützlich für automatisierte Build-Pipelines. Standardmäßig leer.",
    },
    macos_sign_keyring_password: {
        name: "macOS Schlüsselbund-Passwort",
        desc: "Gibt das Passwort für die Schlüsselbund-Datei an, die beim automatisierten Code-Signing verwendet wird. Funktioniert in Verbindung mit --macos-sign-keyring-filename, um nicht-interaktives Signieren in CI/CD-Workflows zu ermöglichen.\n" +
            "Standardmäßig leer.",
    },
    macos_app_version: {
        name: "macOS App-Version",
        desc: "Die Produktversion, die in den macOS-Bundle-Informationen verwendet werden soll. Wenn nicht angegeben, wird standardmäßig \"1.0\" verwendet.",
        elements: {
            default_version: {
                name: "1.0",
                desc: "Standardwert",
            },
        },
    },
    macos_app_protected_resource: {
        name: "macOS Geschützte Ressource anfordern",
        desc: "Fordert die Berechtigung zum Zugriff auf eine geschützte macOS-Ressource an, z. B. \"NSMicrophoneUsageDescription:Mikrofonzugriff für Audioaufnahmen.\" für den Zugriff auf das Mikrofon,\n" +
            "und stellt dem Benutzer einen informativen Text zur Verfügung, warum dies benötigt wird. Vor dem Doppelpunkt steht ein Betriebssystem-Bezeichner für den Zugriff, gefolgt vom Informationstext.\n" +
            "Gültige Werte finden Sie unter https://developer.apple.com/documentation/bundleresources/information_property_list/protected_resources.\n" +
            "Kann mehrmals angegeben werden. Standardmäßig leer.",
    },
    // Linux-spezifische Steuerungen
    linux_icon: {
        name: "Linux-Symbol",
        desc: "Fügt dem Onefile-Binärprogramm ein Symbol hinzu. Kann nur einmal angegeben werden. Standardmäßig das Python-Symbol, falls verfügbar.",
    },
    // Informationen zur Binärversion
    company_name: {
        name: "Firmenname",
        desc: "Der in den Versionsinformationen zu verwendende Firmenname. Standardmäßig keine.",
    },
    product_name: {
        name: "Produktname",
        desc: "Der in den Versionsinformationen zu verwendende Produktname. Standardmäßig der Basisdateiname der Binärdatei.",
    },
    file_version: {
        name: "Dateiversion",
        desc: "Die in den Versionsinformationen zu verwendende Dateiversion. Muss eine Sequenz von bis zu 4 Zahlen sein, z. B. 1.0 oder 1.0.0.0, mehr Zahlen oder eine Zeichenkette sind nicht erlaubt. Standardmäßig keine.",
    },
    product_version: {
        name: "Produktversion",
        desc: "Die in den Versionsinformationen zu verwendende Produktversion. Muss eine Sequenz von bis zu 4 Zahlen sein, z. B. 1.0 oder 1.0.0.0, mehr Zahlen oder eine Zeichenkette sind nicht erlaubt. Standardmäßig keine.",
    },
    file_description: {
        name: "Dateibeschreibung",
        desc: "Die in den Versionsinformationen zu verwendende Dateibeschreibung. Derzeit nur unter Windows verfügbar. Standardmäßig der Dateiname der Binärdatei.",
    },
    copyright: {
        name: "Copyright-Text",
        desc: "Die in den Versionsinformationen zu verwendenden Copyright-Informationen. Derzeit nur unter Windows/macOS verfügbar. Standardmäßig nicht angezeigt.",
    },
    trademarks: {
        name: "Marken-Text",
        desc: "Die in den Versionsinformationen zu verwendenden Marken. Derzeit nur unter Windows/macOS verfügbar. Standardmäßig nicht angezeigt.",
    },
    // Plugin-Steuerung
    enable_plugins: {
        name: "Plugins aktivieren",
        desc: "Aktiviert Plugins. Muss ein Plugin-Name sein. Standardmäßig leer.",
        elements: {
            anti_bloat: {
                name: "Anti-Bloat",
                desc: "Entfernt dumme Import-Patches aus verbreiteten Bibliotheksmodulen.",
            },
            data_files: {
                name: "Datendateien einschließen",
                desc: "Schließt Datendateien ein, die durch Paketkonfigurationen angegeben sind.",
            },
            delvewheel: {
                name: "Delvewheel-Unterstützung",
                desc: "Unterstützt die Verwendung von delvewheel für Pakete im Standalone-Modus",
            },
            dill_compat: {
                name: "dill Paket-Kompatibilitätsunterstützung",
                desc: "Unterstützt die Kompatibilität mit dem 'dill'-Paket",
            },
            dll_files: {
                name: "DLL-Dateien einschließen",
                desc: "Schließt DLL-Konfigurationen gemäß Paketkonfigurationen ein",
            },
            enum_compat: {
                name: "Enum-Kompatibilität",
                desc: "Unterstützt Python2 und das enum-Paket",
            },
            eventlet: {
                name: "Eventlet-Unterstützung",
                desc: "Unterstützt die Einbeziehung von 'eventlet'-Abhängigkeiten und deren Monkey-Patching-Anforderungen für das 'dns'-Paket.",
            },
            gevent: {
                name: "Gevent-Unterstützung",
                desc: "Unterstützt das gevent-Paket",
            },
            gi: {
                name: "GI-Unterstützung",
                desc: "Unterstützt die Typelib-Abhängigkeiten des GI-Pakets",
            },
            glfw: {
                name: "glfw-Unterstützung",
                desc: "Unterstützt die Verwendung der Pakete 'OpenGL' (PyOpenGL) und 'glfw' im Standalone-Modus",
            },
            implicit_imports: {
                name: "Implizite Importe",
                desc: "Stellt implizite Importe basierend auf Paketkonfigurationen bereit.",
            },
            kivy: {
                name: "Kivy-Unterstützung",
                desc: "Unterstützt das 'kivy'-Paket.",
            },
            matplotlib: {
                name: "Matplotlib-Unterstützung",
                desc: "Unterstützt das 'matplotlib'-Modul.",
            },
            multiprocessing: {
                name: "Multiprocessing-Unterstützung",
                desc: "Unterstützt das 'multiprocessing'-Modul von Python.",
            },
            no_qt: {
                name: "Kein Qt",
                desc: "Deaktiviert alle Qt-Bindungen im Standalone-Modus.",
            },
            options_nanny: {
                name: "Optionen-Betreuer",
                desc: "Informiert den Benutzer über potenzielle Probleme basierend auf Paketkonfigurationen.",
            },
            pbr_compat: {
                name: "pbr Kompatibilitätsunterstützung",
                desc: "Unterstützt die Verwendung des 'pbr'-Pakets im Standalone-Modus.",
            },
            pkg_resources: {
                name: "pkg_resources Unterstützung",
                desc: "Löst die Handhabung von pkg_resources.",
            },
            pmw_freezer: {
                name: "Pmw-Unterstützung",
                desc: "Unterstützt das 'Pmw'-Paket",
            },
            pylint_warnings: {
                name: "Pylint-Warnungen",
                desc: "Unterstützt PyLint / PyDev Code-Kennzeichnung.",
            },
            pyqt5: {
                name: "PyQt5-Unterstützung",
                desc: "Unterstützt das 'PyQt5'-Paket.",
            },
            pyqt6: {
                name: "PyQt6-Unterstützung",
                desc: "Unterstützt das 'PyQt6'-Paket",
            },
            pyside2: {
                name: "PySide2-Unterstützung",
                desc: "Unterstützt das 'PySide2'-Paket",
            },
            pyside6: {
                name: "PySide6-Unterstützung",
                desc: "Unterstützt das 'PySide6'-Paket",
            },
            pywebview: {
                name: "PyWebview-Unterstützung",
                desc: "Unterstützt das 'webview'-Paket (pywebview auf PyPI).",
            },
            tk_inter: {
                name: "Tkinter-Unterstützung",
                desc: "Unterstützt das Tk-Modul von Python.",
            },
            transformers: {
                name: "Transformers implizite Importe",
                desc: "Stellt implizite Importe für das Transformers-Paket bereit.",
            },
            upx: {
                name: "UPX automatisch verwenden",
                desc: "Verwendet UPX automatisch, um erstellte Binärdateien zu komprimieren.",
            },
        },
    },
    disable_plugins: {
        name: "Plugins deaktivieren",
        desc: "Deaktiviert Plugins. Muss ein Plugin-Name sein. Verwenden Sie '--plugin-list', um die vollständige Liste abzufragen und zu beenden. In den meisten Fällen ist das Deaktivieren von Standard-Plugins keine gute Idee. Standardmäßig leer.",
        elements: {
            anti_bloat: {
                name: "Anti-Bloat",
                desc: "Entfernt dumme Import-Patches aus verbreiteten Bibliotheksmodulen.",
            },
            data_files: {
                name: "Datendateien einschließen",
                desc: "Schließt Datendateien ein, die durch Paketkonfigurationen angegeben sind.",
            },
            delvewheel: {
                name: "Delvewheel-Unterstützung",
                desc: "Unterstützt die Verwendung von delvewheel für Pakete im Standalone-Modus",
            },
            dill_compat: {
                name: "dill Paket-Kompatibilitätsunterstützung",
                desc: "Unterstützt die Kompatibilität mit dem 'dill'-Paket",
            },
            dll_files: {
                name: "DLL-Dateien einschließen",
                desc: "Schließt DLL-Konfigurationen gemäß Paketkonfigurationen ein",
            },
            enum_compat: {
                name: "Enum-Kompatibilität",
                desc: "Unterstützt Python2 und das enum-Paket",
            },
            eventlet: {
                name: "Eventlet-Unterstützung",
                desc: "Unterstützt die Einbeziehung von 'eventlet'-Abhängigkeiten und deren Monkey-Patching-Anforderungen für das 'dns'-Paket.",
            },
            gevent: {
                name: "Gevent-Unterstützung",
                desc: "Unterstützt das gevent-Paket",
            },
            gi: {
                name: "GI-Unterstützung",
                desc: "Unterstützt die Typelib-Abhängigkeiten des GI-Pakets",
            },
            glfw: {
                name: "glfw-Unterstützung",
                desc: "Unterstützt die Verwendung der Pakete 'OpenGL' (PyOpenGL) und 'glfw' im Standalone-Modus",
            },
            implicit_imports: {
                name: "Implizite Importe",
                desc: "Stellt implizite Importe basierend auf Paketkonfigurationen bereit.",
            },
            kivy: {
                name: "Kivy-Unterstützung",
                desc: "Unterstützt das 'kivy'-Paket.",
            },
            matplotlib: {
                name: "Matplotlib-Unterstützung",
                desc: "Unterstützt das 'matplotlib'-Modul.",
            },
            multiprocessing: {
                name: "Multiprocessing-Unterstützung",
                desc: "Unterstützt das 'multiprocessing'-Modul von Python.",
            },
            no_qt: {
                name: "Kein Qt",
                desc: "Deaktiviert alle Qt-Bindungen im Standalone-Modus.",
            },
            options_nanny: {
                name: "Optionen-Betreuer",
                desc: "Informiert den Benutzer über potenzielle Probleme basierend auf Paketkonfigurationen.",
            },
            pbr_compat: {
                name: "pbr Kompatibilitätsunterstützung",
                desc: "Unterstützt die Verwendung des 'pbr'-Pakets im Standalone-Modus.",
            },
            pkg_resources: {
                name: "pkg_resources Unterstützung",
                desc: "Löst die Handhabung von pkg_resources.",
            },
            pmw_freezer: {
                name: "Pmw-Unterstützung",
                desc: "Unterstützt das 'Pmw'-Paket",
            },
            pylint_warnings: {
                name: "Pylint-Warnungen",
                desc: "Unterstützt PyLint / PyDev Code-Kennzeichnung.",
            },
            pyqt5: {
                name: "PyQt5-Unterstützung",
                desc: "Unterstützt das 'PyQt5'-Paket.",
            },
            pyqt6: {
                name: "PyQt6-Unterstützung",
                desc: "Unterstützt das 'PyQt6'-Paket",
            },
            pyside2: {
                name: "PySide2-Unterstützung",
                desc: "Unterstützt das 'PySide2'-Paket",
            },
            pyside6: {
                name: "PySide6-Unterstützung",
                desc: "Unterstützt das 'PySide6'-Paket",
            },
            pywebview: {
                name: "PyWebview-Unterstützung",
                desc: "Unterstützt das 'webview'-Paket (pywebview auf PyPI).",
            },
            tk_inter: {
                name: "Tkinter-Unterstützung",
                desc: "Unterstützt das Tk-Modul von Python.",
            },
            transformers: {
                name: "Transformers implizite Importe",
                desc: "Stellt implizite Importe für das Transformers-Paket bereit.",
            },
            upx: {
                name: "UPX automatisch verwenden",
                desc: "Verwendet UPX automatisch, um erstellte Binärdateien zu komprimieren.",
            },
        },
    },
    plugin_list: {
        name: "Plugin-Liste",
        desc: "Zeigt eine Liste aller verfügbaren Plugins an und beendet das Programm. Standardmäßig deaktiviert.",
    },
    user_plugin: {
        name: "Benutzer-Plugin",
        desc: "Der Dateiname eines Benutzer-Plugins. Kann mehrmals angegeben werden. Standardmäßig leer.",
    },
    module_parameter: {
        name: "Modul-Parameter",
        desc: "Stellt einen Modul-Parameter bereit. Einige Pakete erfordern, dass Sie zusätzliche Entscheidungen treffen. Das aktuelle Format ist --module-parameter=modul.name-option-name=wert\n" +
            "(module-parameter=modul.name-option-name=value). Standardmäßig leer.",
    },
    show_source_changes: {
        name: "Quellcode-Änderungen anzeigen",
        desc: "Zeigt die Quellcode-Änderungen am Inhalt der Original-Python-Datei vor der Kompilierung. Hauptsächlich für die Entwicklung von Plugins und Nuitka-Paketkonfigurationen. Z. B. mit '-show-source-changes=numpy.**'\n" +
            "um alle Änderungen unter dem gegebenen Namespace oder '*' für alle potenziell großen Änderungen zu sehen. Standardmäßig leer.",
    },
    // Cross-Kompilierung
    target: {
        name: "Ziel",
        desc: "Cross-Kompilierungsziel. Diese Funktion ist hoch experimentell und wird entwickelt und ist derzeit nicht nutzbar. Wir arbeiten an dem Ziel '--target=wasi', andere Ziele werden derzeit nicht unterstützt.",
    },
    // 'Anti-Bloat' Plugin-Optionen
    show_anti_bloat_changes: {
        name: "Anti-Bloat Änderungen anzeigen",
        desc: "Zeigt die vom Plugin vorgenommenen Änderungen kommentiert an.",
    },
    noinclude_setuptools_mode: {
        name: "Kein setuptools Modus",
        desc: "Wie mit dem Auffinden von \"setuptools\" oder \"setuptools_scm\"-Importen umgegangen werden soll. Dieses Paket kann sehr groß werden und viele Abhängigkeiten mit sich bringen und sollte vermieden werden.",
    },
    noinclude_pytest_mode: {
        name: "Kein pytest Modus",
        desc: "Wie mit dem Auffinden von \"pytest\" oder \"nose\"-Importen umgegangen werden soll. Dieses Paket kann sehr groß werden und viele Abhängigkeiten mit sich bringen und sollte vermieden werden.",
    },
    noinclude_unittest_mode: {
        name: "Kein unittest Modus",
        desc: "Wie mit dem Auffinden von \"unittest\"-Importen umgegangen werden soll. Dieses Paket kann sehr groß werden und viele Abhängigkeiten mit sich bringen und sollte vermieden werden.",
    },
    noinclude_pydoc_mode: {
        name: "Kein pydoc Modus",
        desc: "Wie mit dem Auffinden von \"pydoc\"-Importen umgegangen werden soll. Die Verwendung dieses Pakets kennzeichnet nutzlosen Code in einer Bereitstellung und sollte vermieden werden.",
    },
    noinclude_IPython_mode: {
        name: "Kein IPython Modus",
        desc: "Wie mit dem Auffinden von \"IPython\"-Importen umgegangen werden soll. Dieses Paket kann sehr groß werden und viele Abhängigkeiten mit sich bringen und sollte vermieden werden.",
    },
    noinclude_dask_mode: {
        name: "Kein dask Modus",
        desc: "Wie mit dem Auffinden von \"dask\"-Importen umgegangen werden soll. Dieses Paket kann sehr groß werden und viele Abhängigkeiten mit sich bringen und sollte vermieden werden.",
    },
    noinclude_numba_mode: {
        name: "Kein numba Modus",
        desc: "Wie mit dem Auffinden von \"numba\"-Importen umgegangen werden soll. Dieses Paket kann sehr groß werden und viele Abhängigkeiten mit sich bringen und funktioniert derzeit im Standalone-Modus noch nicht richtig.\n" +
            "Dieses Paket kann sehr groß werden und viele Abhängigkeiten mit sich bringen und sollte vermieden werden.",
    },
    noinclude_default_mode: {
        name: "Kein Standardmodus",
        desc: "Dies gibt tatsächlich den Standardwert \"warning\" für die obigen Optionen an und kann verwendet werden, um alle obigen Optionen einzuschalten.",
    },
    noinclude_custom_mode: {
        name: "Kein benutzerdefinierter Modus",
        desc: "Wie mit dem Auffinden eines bestimmten Imports umgegangen werden soll. Das Format ist Modulname, kann und sollte ein Top-Level-Paket sein, gefolgt von einer Option, \"error\", \"warning\", \"nofollow\",\n" +
            "z. B. PyQt5:error.",
    },
    // 'Playwright' Plugin-Optionen
    playwright_include_browser: {
        name: "Playwright Browser einschließen",
        desc: "Welche Playwright-Browser eingeschlossen werden sollen. Kann mehrmals angegeben werden. Verwenden Sie \"all\", um alle installierten Browser einzuschließen.",
        elements: {
            all: {
                name: "Alle einschließen",
                desc: "Schließt alle installierten Browser ein",
            },
        },
    },
    // 'spaCy' Plugin-Optionen
    spacy_language_model: {
        name: "spaCy Sprachmodell",
        desc: "Welches spaCy-Sprachmodell verwendet werden soll. Kann mehrmals angegeben werden. Verwenden Sie 'all', um alle heruntergeladenen Modelle einzuschließen.",
        elements: {
            all: {
                name: "Alle einschließen",
                desc: "Schließt alle heruntergeladenen Modelle ein",
            },
        },
    },
};